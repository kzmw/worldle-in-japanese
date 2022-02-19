import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      placeholder: "Country, territory...",
      guess: "Guess",
      share: "Share",
      showOnGoogleMaps: "👀 on Google Maps",
      welldone: "Well done!",
      unknownCountry: "Unknown country!",
      copy: "Copied results to clipboard",
      showCountry: "🗺️ Show map!",
      cancelRotation: "🌀 Cancel rotation",
      settings: {
        title: "Settings",
        distanceUnit: "Unit of distance",
        theme: "Theme",
        difficultyModifiers: "Difficulty modifiers",
        startingNextDay: "Starting the next day!",
        noImageMode: "Hide country image for more of a challenge.",
        rotationMode: "Randomly rotate country image.",
      },
      stats: {
        title: "Statistics",
        played: "Played",
        win: "Win %",
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        averageBestDistance: "Best Distances Average",
        guessDistribution: "Guess distribution:",
      },
      buyMeACoffee: "Buy me a ☕!",
    },
  },
  fr: {
    translation: {
      placeholder: "Pays, territoires...",
      guess: "Deviner",
      share: "Partager",
      showOnGoogleMaps: "👀 sur Google Maps",
      welldone: "Bien joué !",
      unknownCountry: "Pays inconnu !",
      copy: "Résultat copié !",
      showCountry: "🗺️ Afficher la carte !",
      cancelRotation: "🌀 Annule la rotation",
      settings: {
        title: "Paramètres",
        distanceUnit: "Unité de distance",
        theme: "Thème",
        difficultyModifiers: "Modificateurs de difficulté",
        startingNextDay: "A partir du lendemain !",
        noImageMode: "Cache l'image du pays pour plus de challenge.",
        rotationMode: "Tourne l'image du pays de manière aléatoire.",
      },
      stats: {
        title: "Statistiques",
        played: "Parties",
        win: "Victoires %",
        currentStreak: "Série Actuelle",
        maxStreak: "Série Max",
        averageBestDistance: "Moyenne Meilleures Distances",
        guessDistribution: "Répartitions des victoires:",
      },
      buyMeACoffee: "Offrez moi un ☕ !",
    },
  },
  ja: {
    translation: {
      placeholder: "国や地域",
      guess: "推理",
      share: "共有",
      showOnGoogleMaps: "Google Mapで見る",
      welldone: "うまくいきました",
      unknownCountry: "不明な国や地域です",
      copy: "結果をクリップボードにコピーしました。",
      showCountry: "地図を開く",
      cancelRotation: "画像の回転をやめる",
      settings: {
        title: "設定",
        distanceUnit: "距離の単位",
        theme: "テーマ",
        difficultyModifiers: "難易度変更",
        startingNextDay: "次の日から更新されます。",
        noImageMode: "国(地域)の画像を隠す",
        rotationMode: "ランダムに画像を回転する",
      },
      stats: {
        title: "統計",
        played: "プレイ済み",
        win: "達成率(%)",
        currentStreak: "連続達成数",
        maxStreak: "最多連続達成数",
        averageBestDistance: "最良距離平均",
        guessDistribution: "推理分布:",
      },
      buyMeACoffee: "Buy me a ☕!",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
