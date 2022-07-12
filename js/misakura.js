$(function() {
	
	// 取得先
	var $input = $('input[name="BeforeText"]');
	// 出力先
	var $output = $('input[name="AfterText"]');
	// モーダルにも書き込む
	var $modal = $("#ModalValue").text();
	
	// 実処理	参考：https://ginpen.com/2018/01/30/realtime-form-values/
	$input.on('input', function(event) {
		var value = misakura($input.val());
		// 変換結果に出力する
		$output.val(value);
		// モーダルにも出力する
		$("#ModalValue").text(value);
	});
  
  
});


function misakura(str){
//ver 1.72
str = str + "\n";
//↑暫定処置
str = str.replace(/(気持|きも)ちいぃ/g,'ぎも゛ぢい゛い゛ぃ');
str = str.replace(/(気持|きも)ちいい/g,'きも゛ぢい゛～っ');
str = str.replace(/(大好|だいす)き/g,'らいしゅきいぃっ');
str = str.replace(/(ミルク|みるく|牛乳)/g,'ちんぽミルク');
str = str.replace(/お(願|ねが)い/g,'お願いぃぃぃっっっﾞ');
/* add_start_2020/06/25 */
str = str.replace(/あたたかい/g,'お姉ちゃんのおまんこ……あったかくて……ほっとして……あうぅ……ちんぽのためのお風呂みたいだよぅ');
str = str.replace(/(おちんぽ|いじめ)/g,'わたしのぉ…わたしのおちんぽいじめてくらしゃひっ！！');
str = str.replace(/(状況説明|今日のできごと)/g,'朝　目が覚めたら　メッチャ犯されていました');
/* add_end */
str = str.replace(/お/g,'おﾞぉおォおん');
str = str.replace(/すみか/g,'おしりずぶずぶ～(⋈◍＞◡＜◍)。✧♡');
str = str.replace(/ぁ/g,'ぁぁ゛ぁ゛');
str = str.replace(/あ/g,'ぁあああ あぉ');
str = str.replace(/ごきげんよう/,'ごきげんよぉおお！んおっ！んおおーーっ！ ');
str = str.replace(/ごきげんよう/g,'ごきげんみゃぁあ゛あ゛ぁ゛ぁぁあ！！');
str = str.replace(/こん(にち|ばん)[はわ]/g,'こん$1みゃぁあ゛あ゛ぁ゛ぁぁあ！！');
str = str.replace(/えて/g,'えてへぇええぇﾞ');
str = str.replace(/する/g,'するの');
str = str.replace(/します/g,'するの');
str = str.replace(/精液/g,'せーしっせーし でりゅぅ でちゃいましゅ みるく ちんぽみるく ふたなりみるく');
str = str.replace(/射精/g,'でちゃうっ れちゃうよぉおおﾞ');
str = str.replace(/(馬鹿|バカ|ばか)/g,'バカ！バカ！まんこ!!');
str = str.replace(/いい/g,'いぃぃっよぉおおﾞ');
str = str.replace(/[好す]き/g,'ちゅき');
str = str.replace(/して/g,'してぇぇぇぇ゛');
str = str.replace(/行く/g,'んはっ イっぐぅぅぅふうぅ');
str = str.replace(/いく/g,'イっくぅぅふぅん');
str = str.replace(/イク/g,'イッちゃううぅん');
str = str.replace(/駄目/g,'らめにゃのぉぉぉ゛');
str = str.replace(/ダメ/g,'んぉほぉぉォォ　らめぇ');
str = str.replace(/だめ/g,'らめぇぇ');
str = str.replace(/ちゃん/g,'ちゃぁん');
str = str.replace(/(おい|美味)しい/g,'$1ひぃ…れしゅぅ');
str = str.replace(/(た|る|ない)([。、　 ・…!?！？」\n\r\x00])/g,'$1の$2');
str = str.replace(/さい([。、　 ・…!?！？」\n\r\x00])/g,'さいなの$1');
str = str.replace(/よ([。、　 ・…!?！？」\n\r\x00])/g,'よお゛お゛お゛ぉ$1');
str = str.replace(/もう/g,'んもぉ゛お゛お゛ぉぉ');
str = str.replace(/(い|入)れて/g,'いれてえぇぇぇえ');
str = str.replace(/(がんば|頑張)る/g,'尻穴ちんぽしごき$1るぅ!!!');
str = str.replace(/出る/g,'でちゃうっ れちゃうよぉおおﾞ');
str = str.replace(/でる/g,'でっ…でるぅでるうぅうぅ');
str = str.replace(/です/g,'れしゅぅぅぅ');
str = str.replace(/ます/g,'ましゅぅぅぅ');
str = str.replace(/はい/g,'はひぃ');
str = str.replace(/スゴイ/g,'スゴぉッ!!');
str = str.replace(/(すご|凄)い/g,'しゅごいのょぉぉぅ');
str = str.replace(/だ/g,'ら');
str = str.replace(/さ/g,'しゃ');
str = str.replace(/な/g,'にゃ');
str = str.replace(/つ/g,'ちゅ');
str = str.replace(/ちゃ/g,'ひゃ');
str = str.replace(/じゃ/g,'に゛ゃ');
str = str.replace(/ほ/g,'ほお゛お゛っ');
str = str.replace(/で/g,'れ');
str = str.replace(/す/g,'しゅ');
str = str.replace(/ざ/g,'じゃ');
str = str.replace(/い/g,'いぃ');
str = str.replace(/の/g,'のぉおお');
/* add_start_2020/06/25 */
str = str.replace(/(気持|きも)ちい/g,'きもぢい゛ーっ　みゅくぴゅーーーってっ　きもぢい゛ぃーーっ！！！');
str = str.replace(/(なか|ナカ|中|膣)に出てる/g,'ナカで……膣内で！ こってりしてるのが射精（で）てるよおおあおおおおおおッ');
str = str.replace(/(国籍|くに)/g,'気持ちいすぎて、私……お国がわからなくなっちゃうッ！');
/* add_end */
return(str);
}