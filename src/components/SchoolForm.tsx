"use client"

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  // Student Information
  studentName: z.string().min(2, "Name must be at least 2 characters."),
  dob: z.string().min(1, "Date of Birth is required."),
  gender: z.enum(["male", "female", "other"], { required_error: "Gender is required." }),
  isFirstSchool: z.boolean().default(false),
  lookingForClass: z.string().min(1, "Please select a class."),
  currentSchool: z.string().optional(),

  // Parents Information
  fatherName: z.string().min(2, "Name must be at least 2 characters."),
  motherName: z.string().min(2, "Name must be at least 2 characters."),
  fatherContact: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit contact number."),
  motherContact: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit contact number."),
  email: z.string().email("Please enter a valid email address."),
  fatherOccupation: z.string().min(1, "Father's occupation is required."),
  motherOccupation: z.string().min(1, "Mother's occupation is required."),

  // Other Information
  addressArea: z.string().min(1, "Area is required."),
  addressState: z.string().min(1, "State is required."),
  addressPinCode: z.string().regex(/^\d{6}$/, "Please enter a valid 6-digit pin code."),
  addressDistrict: z.string().min(1, "District is required."),
  addressCountry: z.string().min(1, "Country is required."),
  preferredSchool1: z.string().optional(),
  preferredSchool2: z.string().optional(),
  preferredSchool3: z.string().optional(),
  preferredSchool4: z.string().optional(),
  preferredSchool5: z.string().optional(),
}).refine(data => {
    if (!data.isFirstSchool) {
        return !!data.currentSchool && data.currentSchool.length > 0;
    }
    return true;
}, {
    message: "Current School is required if this is not their first school.",
    path: ["currentSchool"],
});

type FormValues = z.infer<typeof formSchema>;

const classOptions = ["Play Group", "Nursery", "LKG", "UKG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SchoolForm() {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isFirstSchool: false,
    }
  });

  const isFirstSchool = watch("isFirstSchool");

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert("Form submitted successfully! Check the console for data.");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>School Admission Form</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Student Information Section */}
          <motion.section variants={sectionVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Student Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="studentName">Student's Name</Label>
                <Input id="studentName" {...register("studentName")} />
                {errors.studentName && <p className="text-red-500 text-sm mt-1">{errors.studentName.message}</p>}
              </div>
              <div>
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" {...register("dob")} />
                {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
              </div>
              <div>
                <Label>Gender</Label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
              </div>
              <div>
                <Label>Looking for Class</Label>
                <Controller
                  name="lookingForClass"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger><SelectValue placeholder="Select a class" /></SelectTrigger>
                      <SelectContent>
                        {classOptions.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.lookingForClass && <p className="text-red-500 text-sm mt-1">{errors.lookingForClass.message}</p>}
              </div>
              <div className="flex items-center space-x-2 pt-6">
                <Controller
                    name="isFirstSchool"
                    control={control}
                    render={({ field }) => (
                        <Checkbox id="isFirstSchool" checked={field.value} onCheckedChange={field.onChange} />
                    )}
                />
                <Label htmlFor="isFirstSchool">This is the student's first school</Label>
              </div>
              {!isFirstSchool && (
                <div>
                  <Label htmlFor="currentSchool">Current School</Label>
                  <Input id="currentSchool" {...register("currentSchool")} />
                  {errors.currentSchool && <p className="text-red-500 text-sm mt-1">{errors.currentSchool.message}</p>}
                </div>
              )}
            </div>
          </motion.section>

          {/* Parents Information Section */}
          <motion.section variants={sectionVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Parents' Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fatherName">Father's Name</Label>
                <Input id="fatherName" {...register("fatherName")} />
                {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName.message}</p>}
              </div>
              <div>
                <Label htmlFor="motherName">Mother's Name</Label>
                <Input id="motherName" {...register("motherName")} />
                {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName.message}</p>}
              </div>
               <div>
                <Label htmlFor="fatherContact">Father's Contact</Label>
                <Input id="fatherContact" {...register("fatherContact")} />
                {errors.fatherContact && <p className="text-red-500 text-sm mt-1">{errors.fatherContact.message}</p>}
              </div>
              <div>
                <Label htmlFor="motherContact">Mother's Contact</Label>
                <Input id="motherContact" {...register("motherContact")} />
                {errors.motherContact && <p className="text-red-500 text-sm mt-1">{errors.motherContact.message}</p>}
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                <Input id="fatherOccupation" {...register("fatherOccupation")} />
                {errors.fatherOccupation && <p className="text-red-500 text-sm mt-1">{errors.fatherOccupation.message}</p>}
              </div>
              <div>
                <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                <Input id="motherOccupation" {...register("motherOccupation")} />
                {errors.motherOccupation && <p className="text-red-500 text-sm mt-1">{errors.motherOccupation.message}</p>}
              </div>
            </div>
          </motion.section>

          {/* Other Information Section */}
          <motion.section variants={sectionVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Other Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <Label htmlFor="addressArea">Current Address (Area)</Label>
                    <Input id="addressArea" {...register("addressArea")} />
                    {errors.addressArea && <p className="text-red-500 text-sm mt-1">{errors.addressArea.message}</p>}
                </div>
                <div>
                    <Label htmlFor="addressDistrict">District</Label>
                    <Input id="addressDistrict" {...register("addressDistrict")} />
                    {errors.addressDistrict && <p className="text-red-500 text-sm mt-1">{errors.addressDistrict.message}</p>}
                </div>
                 <div>
                    <Label htmlFor="addressState">State</Label>
                    <Input id="addressState" {...register("addressState")} />
                    {errors.addressState && <p className="text-red-500 text-sm mt-1">{errors.addressState.message}</p>}
                </div>
                 <div>
                    <Label htmlFor="addressPinCode">Pin Code</Label>
                    <Input id="addressPinCode" {...register("addressPinCode")} />
                    {errors.addressPinCode && <p className="text-red-500 text-sm mt-1">{errors.addressPinCode.message}</p>}
                </div>
                 <div className="md:col-span-2">
                    <Label htmlFor="addressCountry">Country</Label>
                    <Input id="addressCountry" {...register("addressCountry")} />
                    {errors.addressCountry && <p className="text-red-500 text-sm mt-1">{errors.addressCountry.message}</p>}
                </div>
            </div>
            <div className="mt-6">
                <h4 className="font-medium mb-2">Preferred Schools (Optional)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Input placeholder="School #1" {...register("preferredSchool1")} />
                    <Input placeholder="School #2" {...register("preferredSchool2")} />
                    <Input placeholder="School #3" {...register("preferredSchool3")} />
                    <Input placeholder="School #4" {...register("preferredSchool4")} />
                    <Input placeholder="School #5" {...register("preferredSchool5")} />
                </div>
            </div>
          </motion.section>

          <motion.div variants={sectionVariants} className="text-center pt-4">
            <Button type="submit" size="lg">Submit Application</Button>
          </motion.div>
        </motion.form>
      </CardContent>
    </Card>
  );
}

export default SchoolForm;
