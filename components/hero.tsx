import { title, subtitle } from "@/components/primitives";
import { Tooltip } from "@heroui/react";
import Image from "next/image";


export const Hero: React.FC = () => (
  <>
    <div className="flex-1 flex flex-col-reverse md:flex-row justify-end items-center">
      <div className="inline-block max-w-xl text-center">
        <h1 className={`${title({ color: "yellow" })} decotype-thuluth`}>&nbsp;منشأة البكارى&nbsp;</h1>
        <br />
        <div className={subtitle({ class: "mt-5" })}>
          <Tooltip delay={5000} placement="bottom" content=" العبارة تعني أن منشأة البكارى تحتفظ بتاريخها وتراثها القديم، مما يمنحها طابعًا أصيلًا ومميزًا (عبق التاريخ)،
           وفي نفس الوقت تعيش تطورات العصر الحديث بطريقة جميلة ومتناغمة (جمال الحاضر).
            كما أن أهلها يحافظون على قيمهم التقليدية وروح المحبة والتعاون فيما بينهم (روح الأصالة والتآخي).">
            <p  className="mr-5"> تجمع بين عبق التاريخ وجمال الحاضر، حيث يعيش أهلها بروح الأصالة والتآخي. </p>
          </Tooltip>
        </div>
      </div>
      <div className="flex-1 flex gap-3">
        <Image src="/svg/undraw_festivities_q090.svg" alt="Hero" width={700} height={700} className="md:mr-0 mb-8" />
      </div>
    </div>
  </>
);