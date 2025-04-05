'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
  function () {  //ボタンが押されたとき
    //() => {
    // 入力欄の値を取得する
    const userName = userNameInput.value;
    if (userName.length === 0) {
      // 名前が空の時は処理を終了する
      // 例外的なときは処理を行わない　ガード句
      return;
    }
    console.log(userName);

    // 診断結果表示エリアの作成
    // 最初に表示エリアを空にする
    resultDivision.innerText = '';
    // h3タグを作る
    const heading = document.createElement('h3');
    // h3タグの中身ぶ文章を設定する
    heading.innerText = '診断結果';
    // div子要素として追加
    resultDivision.appendChild(heading);
    // pタグを作る
    const paragraph = document.createElement('p');
    // 診断結果の文章を作る
    const result = assessment(userName);
    // pタグの中身の文章を設定する
    paragraph.innerText = result;
    // divタグの子要素とする
    resultDivision.appendChild(paragraph);

    // ツイートエリアの作成
    tweetDivision.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue =
    'https://twitter.com/intent/tweet?button_hashtag='
    + encodeURIComponent('あなたのいいところ')
    + '&ref_src=twsrc%5Etfw';
    // aタグの属性を追加していく
    anchor.setAttribute('href', hrefValue); //URL
    anchor.setAttribute('class', 'twitter-hashtag-button'); //デザイン
    anchor.setAttribute('data-text',result); //投稿する文章
    anchor.innerText = 'Tweet #あなたのいいところ';
    //できたaタグをHTMLに追加する
    tweetDivision.appendChild(anchor)
    // scriptのwidgets.jsを読み込むscriptタグの作成
    const script = document.createElement('script');
    script.setAttribute('src','https://platform.twitter.com/widgets.js')
    tweetDivision.appendChild(script);
    }
  );

  // Enter キーで診断する処理を追加
  userNameInput.addEventListener(
    'keydown',
    (event) => {
      if(event.code === 'Enter') {
        // TODO Enter が押されたときに実行する処理
        assessmentButton.dispatchEvent(new Event('click'));
      }
    }
  )

const answers = [
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
]

/**
 * 名前の文字列を渡すと、診断結果を返す
 * @param {string} userName 診断する名前
 * @return {string} 診断結果
 */

function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    // 文字列のi番目の数値を足し合わせる
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  // 配列の添字は、合計値を配列の要素数で余りをとる
  const index = sumOfCharCode % answers.length;
  //const result = answers[index];
  let result = answers[index];

  // ###userName### をユーザーの名前に置き換える
  result = result.replaceAll('###userName###', userName);
  return result;
}

console.log(assessment('太郎'))
