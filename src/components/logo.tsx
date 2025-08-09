import Image from 'next/image';
import Link from 'next/link';

export function Logo({ size = 80 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center justify-center" aria-label="Maa Savitri Event Planner Home">
      <Image
        src="https://scontent.fjai12-1.fna.fbcdn.net/v/t39.30808-1/363820759_101806096343116_8689825250269001245_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=pQE0k1Jeab4Q7kNvwEu_cTh&_nc_oc=AdlAgSkCCymVd32z390Lr1FVlaNCyFmFH5rGuNJfo3K63bVuDtG608LJFiSO4zKYH5PDeNXV76p72Pn92dOprNho&_nc_zt=24&_nc_ht=scontent.fjai12-1.fna&_nc_gid=qBWhddFFsDbQcE_r2Hd8eg&oh=00_AfUiq_EBTH02HFNYZ9-zeI4nU_o-5-saPBs2tCJD11TsJg&oe=689D20DC"
        alt="Maa Savitri Event Planner Logo"
        width={size}
        height={size}
        className="rounded-full border-2 border-accent transition-transform duration-300 hover:scale-105"
        priority
      />
    </Link>
  );
}
