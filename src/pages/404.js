import Image from "next/image";
import { error } from "../../public/images";
import PrimaryButton from "@component/components/PrimaryButton";
import Link from "next/link";
import PageTitle from "@component/components/PageTitle";

export default function Custom404() {
  return (
    <>
    <PageTitle title={'Error'}/>
      <div className="md:px-64 px-5 md:py-20 py-10 text-center font-garamond">
        <Image src={error} alt="" className="mx-auto" />
        <div className="space-y-3 py-10">
          <h3 className="text-3xl font-semibold">
            Whoops, Nothing delicious to find here!
          </h3>
          <p className="pb-3">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <PrimaryButton title={"Back to Home"} link={'/'} />
        </div>
      </div>
    </>
  );
}
