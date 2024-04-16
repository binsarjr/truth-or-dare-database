const extractOlListElementToArray = (text: string) => {
	const olList = text.match(/<ol>(.*)<\/ol>/);
	if (olList) {
		return olList[1]
			.split("</li>")
			.map((li) => removeHtmlTags(li.replace("<li>", "").trim()));
	}
	return [];
};

const removeHtmlTags = (html: string) => {
	return html.replace(/<[^>]*>/g, "");
};

const source = `

<ol><li>Jika kamu bisa makan siang dengan orang terkenal, siapa yang akan kamu pilih dan mengapa?</li><li>Jika kamu dapat kembali ke masa lalu untuk menghapus satu hal yang kamu katakan atau lakukan, apakah itu?</li><li>Jika kamu bertemu malaikat, apa tiga permintaan kamu?</li><li>Jika kamu bisa menulis siapa pun di bumi untuk presiden, siapa itu dan mengapa?</li><li>Jika kamu hanya pernah menonton rom com atau hanya menonton film menakutkan selama sisa hidup kamu, mana yang akan kamu pilih dan mengapa?</li><li>Lima hal apa yang akan kamu bawa ke pulau terpencil?</li><li>Jika kamu harus mengubah nama kamu, apa nama depan kamu yang baru?</li><li>Jika kamu bisa menjadi karakter fiksi selama sehari, siapa yang akan kamu pilih?</li><li>Jika kamu bisa berkencan dengan karakter fiksi, siapa itu?</li><li>Jika kamu hanya bisa mendengarkan satu lagu selama sisa hidup kamu, apa yang akan kamu pilih?</li><li>Jika kamu hanya akan memakai skamul jepit atau sepatu hak untuk 10 tahun ke depan, mana yang akan kamu pilih?</li><li>Jika kamu hanya bisa makan satu hal selama sisa hidup kamu, apa yang akan kamu pilih?</li><li>Jika kamu hanya bisa mencapai tiga hal dalam hidup, apakah itu?</li><li>Jika kamu memiliki pilihan untuk tidak pernah harus tidur lagi, apakah kamu akan mengambilnya?</li><li>Jika kamu harus mendapatkan tato hari ini, apakah itu?</li><li>Bahkan jika kamu akan dibayar $ 1 juta untuk itu, apa sesuatu yang tidak akan pernah kamu lakukan?</li><li>Jika kamu dapat melakukan perjalanan ke masa lalu dan bertemu dengan satu orang, siapakah itu?</li><li>Acara televisi atau film populer apa yang diam-diam kamu benci?</li><li>Jika kamu harus selalu berpakaian berlebihan atau tidak berpakaian, mana yang akan kamu pilih?</li><li>Jika kamu memiliki sembilan nyawa, apa yang akan kamu lakukan yang tidak akan kamu lakukan sekarang?</li></ol>
`.trim();

console.log(extractOlListElementToArray(source).join("\n"));
