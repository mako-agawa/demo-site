import Link from "next/link";
import React from "react";
import Section from "./Section";

export default function Features() {
  return (
<Section title="サービスの特徴" subTitle="素敵な機能が盛りだくさんです">
         <div className="grid lg:grid-cols-3 gap-4">
          <div className="border relative rounded-md p-6 shadow space-y-3">
            <div className="aspect-video bg-muted"></div>
            <h2>
              <Link href="/">
                記事タイトル
                <span className="absolute inset-0"></span>
              </Link>
            </h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>タグA</button>
          </div>
          <div className="border rounded-md p-6 shadow">aaa</div>
          <div className="border rounded-md p-6 shadow">aaa</div>
        </div>
<button>お問い合せ</button>
</Section>
  );
}
