// ここからコードを書いてください
export function setupTabs() {
  // ホームリンク
  const homeLink = document.querySelector('[data-tab="home"]');
  // 単位変換タブ
  const converterTab = document.querySelector('[data-tab="converter"]');
  // ホームセクション
  const homeSection = document.querySelector("#home");
  // 単位変換セクション
  const converterSection = document.querySelector("#converter");

  // ホームリンクがクリックされたとき
  homeLink.addEventListener("click", () => {
    // 単位セクションにhiddenクラスを追加
    converterSection.classList.add("hidden");
    // ホームセクションからhiddenクラスを削除
    homeSection.classList.remove("hidden");
  });
  // 単位変換タブがクリックされたとき
  converterTab.addEventListener("click", () => {
    // ホームセクションにhiddenクラスを追加
    homeSection.classList.add("hidden");
    // 単位セクションからhiddenクラスを削除
    converterSection.classList.remove("hidden");
  });
}
