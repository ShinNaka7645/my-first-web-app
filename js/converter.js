// ここからコードを書いてください
export function setupConverter() {
  // フォーム要素
  const converterForm = document.querySelector(".converter-form");
  // 入力値のinput要素
  const input = document.querySelector(".converter-input");
  // 変換元のselect要素
  const unitFrom = document.querySelector(".converter-from");
  // 変換先のselect要素
  const unitTo = document.querySelector(".converter-to");
  // 結果を表示する要素
  const result = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  unitFrom.innerHTML = "";
  unitTo.innerHTML = "";

  for (const unit of lengthUnit) {
    unitFrom.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    unitTo.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  // 最初のオプションを選択
  if (unitFrom.options.length > 0) {
    unitFrom.selectedIndex = 0;
  }
  if (unitTo.options.length > 0) {
    unitTo.selectedIndex = 1;
  }

  function convertUnit() {
    // 1. 入力欄の値を取得し、数値に変換
    const inputValue = parseFloat(input.value);

    // 2. isNaN 関数を使用して、値が数値かを確認
    if (isNaN(inputValue)) {
      // 数値でない場合はエラーメッセージを表示して終了
      result.textContent = "Please enter a valid number";
      result.style.color = "red";
      return;
    }

    // 3. 変換元・変換先の単位（比率/ベース）を取得
    const baseFrom = parseFloat(unitFrom.value);
    const baseTo = parseFloat(unitTo.value);

    // 単位のラベル（表示用：km, m, cmなど）
    const unitFromLabel = unitFrom.options[unitFrom.selectedIndex].text;
    const unitToLabel = unitTo.options[unitTo.selectedIndex].text;

    // 4. 変換後の値を計算
    // 公式: (入力値 * 変換元の単位) / (変換先の単位)
    const convertedValue = (inputValue * baseFrom) / baseTo;

    // 5. 変換結果を表示
    // toFixed(3) で小数点以下3桁に整形
    const formattedValue = convertedValue.toFixed(3);

    result.style.color = "black";
    result.textContent = `${inputValue} ${unitFromLabel} = ${formattedValue} ${unitToLabel}`;
  }

  // 入力値や単位が変更された（inputイベント）時に convertUnit を実行
  converterForm.addEventListener("input", convertUnit);

  // Web アプリケーションの起動時（ロード時）にも結果を表示
  convertUnit();
}
