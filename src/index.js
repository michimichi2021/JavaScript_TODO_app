import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //押された完了ボタンの親タグ(div)を未完了リストから削除して完了したTODOに移動する
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(completeTarget);

    //TODO内容の抜き出し
    const text = completeTarget.firstElementChild.innerText;

    //div以下を初期化
    completeTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //button(戻る)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      // document.getElementById("incomplete-list").removeChild(completeTarget);

      //TODO内容の抜き出し
      const text = backTarget.firstElementChild.innerText;

      //div以下を初期化
      backTarget.textContent = null;

      //pタグ生成
      const p = document.createElement("p");
      p.innerText = text;

      //button(完了、削除)タグ生成
      const completeButton = document.createElement("button");
      completeButton.innerText = "完了";
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";

      //list-rowの子要素の設定
      div.appendChild(p);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);

      //divタグを完了リストに追加
      document.getElementById("incomplete-list").appendChild(backTarget);
    });

    //list-rowの子要素の設定
    div.appendChild(p);
    div.appendChild(backButton);

    //divタグを完了リストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //divタグを未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
