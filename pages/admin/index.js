import React from 'react'

function index() {
  const items = [
    { id: 1, text: "अंदाजपत्रक माहिती" },
    { id: 2, text: "पुनर्विनियोजन व निधी वाटप" },
    { id: 3, text: "ग्रामपंचायत जमा खर्च विवरण" },
    { id: 4, text: "ग्रामपंचायतीची सत्ता व दायित्वे" },
    { id: 5, text: "सामान्य रोकड वही" },
    { id: '5 क', text: "दैनिक रोकडवही" },
    { id: 6, text: "जमा रकमांची वर्गीकृत नोंदवही (मासिक)" },
    { id: 7, text: "सामन्य पावती" },
    { id: 8, text: "कर आकारणी नोंदवही" },
    { id: 9, text: "कर मागणी नोंदवही" },
    { id: '9 क', text: "कराची मागणी पावती" },
    { id: 10, text: "कर व फी बाबत पावती" },
    { id: 11, text: "किरकोळ मागणी नोंदवही" },
    { id: 12, text: "आकस्मिक खर्चाचे प्रमाणक" },
    { id: 13, text: "कर्मचारी वर्गाची सूची व वेतनश्रेणी नोंदवही" },
    { id: 14, text: "मुद्रांक हिशोब नोंदवही" },
    { id: 15, text: "उपभोग्य वस्तूंसाठी नोंदवही" },
    { id: 16, text: "जड वस्तू संग्रह व जंगल मालमत्ता नोंदवही" },
    { id: 17, text: "अग्रीम दिलेल्या/अनामत ठेवलेल्या रक्कमांची नोंदवही " },
    { id: 18, text: " किरकोळ रोकडवही" },
    { id: 19, text: "कामावर असलेल्या व्यक्तींचा हजेरीपट" },
    { id: 20, text: "कामाच्या अंदाजाची नोंदवही" },
    { id: '20 क', text: "मोजमाप वही" },
    { id: '20 ख', text: "कामाचे देयक" },
    { id: '20 ख 1', text: "कामाचे देयक" },
    { id: 21, text: "कर्मचाऱ्याच्या देयकाची नोंदवही " },
    { id: 22, text: "स्थावर मालमत्ता नोंदवही ( रस्ते व जमिनी व्यतिरिक्त )" },
    { id: 23, text: " ताब्यातील रस्त्यांची नोंदवही" },
    { id: 24, text: "जमिनीची नोंदवही " },
    { id: 25, text: "गुंतवणूक वही " },
    { id: '26 क', text: "जमा मासिक विवरण" },
    { id: '26 ख', text: " खर्चाचे मासिक विवरण" },
    { id: 27, text: "लेखा परीक्षणातील आक्षेपांच्या पूर्ततेचे मासिक विवरण" },
    { id: 28, text: "मागासवर्गीय १५ टक्के व महिला बालकल्याण १० टक्के करावयाचे खर्चाचे मासिक विवरण नोदनवही " },
    { id: 29, text: "कर्जाची नोंदवही" },
    { id: 30, text: "ग्रामपंचायत लेखा परीक्षण आक्षेप पूर्तता नोंदवही " },
    { id: 31, text: "प्रवास भत्ता देयक" },
    { id: 32, text: "रक्कमेच्या परताव्यासाठीचा आदेश" },
    { id: 33, text: "वृक्ष नोंदवही" },
  ];
  return (
    <> 
    
    <div className="p-6   m-auto">
      <div className="grid lg:-mt-14 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 text-center text-lg font-medium text-gray-800 border border-gray-300"
          >
            {`नमुना क्र. ${item.id}`}
            <br />
            <span className="font-semibold">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default index