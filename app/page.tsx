"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { title, subtitle } from "@/components/primitives";
import { Tooltip } from "@heroui/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={`${title({ color: "yellow" })} decotype-thuluth`} >&nbsp;منشأة البكارى&nbsp;</h1>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          <Tooltip delay={5000} placement="bottom" content=" العبارة تعني أن منشأة البكارى تحتفظ بتاريخها وتراثها القديم، مما يمنحها طابعًا أصيلًا ومميزًا (عبق التاريخ)،
           وفي نفس الوقت تعيش تطورات العصر الحديث بطريقة جميلة ومتناغمة (جمال الحاضر).
            كما أن أهلها يحافظون على قيمهم التقليدية وروح المحبة والتعاون فيما بينهم (روح الأصالة والتآخي).">
            <p> تجمع بين عبق التاريخ وجمال الحاضر، حيث يعيش أهلها بروح الأصالة والتآخي. </p>
          </Tooltip>
        </div>
      </div>
      <div className="flex gap-3">
      </div>
    </section>
  );
}
