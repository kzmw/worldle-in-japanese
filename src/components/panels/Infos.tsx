import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="遊び方" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          <Worldle />
          を6回の推理で解きましょう。
        </div>
        <div>それぞれの推理は国や地域で行います。</div>
        <div>
          それぞれの推理のあと，推理した国(地域)とお題の国(地域)の距離と方角，近さを知ることができます。
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">例</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "チリ",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            推理した<span className="uppercase font-bold">チリ</span>
            はお題の国から{formatDistance(13557000, settingsData.distanceUnit)}
            離れており，お題の国は北西の方角にあり，遠すぎるため，たったの32%の近さであることがわかります。
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "フィンランド",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            2回目の推理
            <span className="uppercase font-bold">フィンランド</span>
            は近づきました！{formatDistance(3206000, settingsData.distanceUnit)}
            離れており，南東の方角にあり，84%の近さです！
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "レバノン",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            次の推理は<span className="uppercase font-bold">レバノン</span>
            で，お題の国でした！やったね！🎉
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        新しい
        <Worldle />
        は毎日更新されます！
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">距離について</div>
        <div>
          表示される距離は推理した国(地域)とお題の国(地域)の中心間の距離を示します。
        </div>
        <div>
          例えば，アメリカとカナダは国境を接していても，計算上の距離は約2260kmになります。
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle />は
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        氏による
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>
        から
        <span className="font-bold">大いに</span>
        アイデアを得て作成されました。
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          原作者：
          <a
            className="underline"
            href="https://twitter.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @teuteuf
          </a>
        </div>
        <div>作者：nisylvania</div>
        <div>国(地域)名は，帝国書院編新詳高等地図を参考にしています。</div>
      </div>
    </Panel>
  );
}
