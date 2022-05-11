import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: localStorage.userInfo ? JSON.parse(localStorage.userInfo) : null,
		audio: [{
			name: "恶魔之子",
			artist: "ヒグチアイ",
			url: "./firstSong.mp3",
			cover: "https://i.ytimg.com/vi/swZQcMkiwCg/maxresdefault.jpg",
			lrc: '[00:00.000] 作词 : ヒグチアイ\n' +
				'[00:00.254] 作曲 : ヒグチアイ\n' +
				'[00:00.508] 编曲 : 兼松衆\n' +
				'[00:00.762] 制作人 : 松岡モトキ\n' +
				'[00:01.19]鉄の弾が　正義の証明\n' +
				'[00:03.88]貫けば　英雄に近づいた\n' +
				'[00:06.71]その目を閉じて　触れてみれば\n' +
				'[00:09.27]同じ形　同じ体温の悪魔\n' +
				'[00:14.51]僕はダメで　あいつはいいの？\n' +
				'[00:17.37]そこに壁があっただけなのに\n' +
				'[00:20.02]生まれてしまった　運命嘆くな\n' +
				'[00:22.56]僕らはみんな　自由なんだから\n' +
				'[00:26.55]鳥のように　羽があれば\n' +
				'[00:31.72]どこへだって行けるけど\n' +
				'[00:37.09]帰る場所が　なければ\n' +
				'[00:41.05]きっとどこへも行けない\n' +
				'[00:46.79]ただただ生きるのは嫌だ\n' +
				'[00:52.04]世界は残酷だ　それでも君を愛すよ\n' +
				'[01:02.75]なにを犠牲にしても　それでも君を守るよ\n' +
				'[01:12.70]間違いだとしても　疑ったりしない\n' +
				'[01:18.15]正しさとは　自分のこと　強く信じることだ\n' +
				'[01:33.36]鉄の雨が　降り散る情景\n' +
				'[01:35.95]テレビの中　映画に見えたんだ\n' +
				'[01:38.86]戦争なんて　愚かな凶暴\n' +
				'[01:41.24]関係ない　知らない国の話\n' +
				'[01:44.18]それならなんで　あいつ憎んで\n' +
				'[01:46.55]黒い気持ち　隠しきれない理由\n' +
				'[01:49.29]説明だって　できやしないんだ\n' +
				'[01:51.85]僕らはなんて　矛盾ばっかなんだ\n' +
				'[02:17.15]この言葉も　訳されれば\n' +
				'[02:22.45]本当の意味は伝わらない\n' +
				'[02:27.65]信じるのは　その目を開いて\n' +
				'[02:33.27]触れた世界だけ\n' +
				'[02:37.38]ただただ生きるのは嫌だ\n' +
				'[02:45.79]世界は残酷だ　それでも君を愛すよ\n' +
				'[02:56.44]なにを犠牲にしても　それでも君を守るよ\n' +
				'[03:06.40]選んだ人の影　捨てたものの屍\n' +
				'[03:11.77]気づいたんだ　自分の中　育つのは悪魔の子\n' +
				'[03:17.06]正義の裏　犠牲の中　心には悪魔の子\n' +
				'[03:24.674] 鼓 : 吉田雄介\n' +
				'[03:32.342] 弦乐 : 大先生室屋ストリングス\n' +
				'[03:40.010] 录音 : 藤浪潤一郎/Kaori Kuroda\n' +
				'[03:47.678] 母带 : Takeo Kira\n',
		},],
	},
	mutations: {
		setUserLogin(state, payload) {
			state.user = payload;
			localStorage.userInfo = JSON.stringify(state.user);
		},
		addSong(state,payload) {
			state.audio.push(payload);
		}
	},
	actions: {},
	modules: {}
})

export default store;
