// Dataset for Trang Nguyen Tieng Viet
// Supports both offline direct file opening and GitHub Pages
window.TNTV_DATA = {
  grades: [
  {
    "grade": 1,
    "title": "Lớp 1",
    "subtitle": "Trạng Nguyên Nhí Khởi Đầu",
    "icon": "🌱",
    "color": "from-emerald-400 to-green-600",
    "hasAudio": true,
    "status": "ready",
    "rounds": [
      {
        "id": "vong-5",
        "name": "Vòng 5 - Thi Sơ Khảo",
        "description": "4 bộ đề thi Sơ khảo cấp trường (Phân loại giỏ, Nối từ, Điền âm vần)",
        "badge": "Cấp Trường",
        "file": "data/lop1/vong5.json",
        "examCount": 4
      },
      {
        "id": "vong-6",
        "name": "Vòng 6 - Thi Hương",
        "description": "3 bộ đề thi Hương cấp Quận/Huyện (Nối câu, Sắp xếp câu, Thành ngữ)",
        "badge": "Cấp Huyện",
        "file": "data/lop1/vong6.json",
        "examCount": 3
      }
    ]
  },
  {
    "grade": 2,
    "title": "Lớp 2",
    "subtitle": "Hổ Con Nhanh Trí",
    "icon": "🐯",
    "color": "from-amber-400 to-orange-500",
    "hasAudio": false,
    "status": "coming_soon",
    "rounds": []
  },
  {
    "grade": 3,
    "title": "Lớp 3",
    "subtitle": "Rồng Vàng Tỏa Sáng",
    "icon": "🐲",
    "color": "from-yellow-400 to-amber-600",
    "hasAudio": false,
    "status": "coming_soon",
    "rounds": []
  },
  {
    "grade": 4,
    "title": "Lớp 4",
    "subtitle": "Trạng Nguyên Tranh Tài",
    "icon": "📚",
    "color": "from-blue-400 to-indigo-600",
    "hasAudio": false,
    "status": "coming_soon",
    "rounds": []
  },
  {
    "grade": 5,
    "title": "Lớp 5",
    "subtitle": "Bảng Vàng Đỗ Đầu",
    "icon": "🎓",
    "color": "from-purple-500 to-indigo-700",
    "hasAudio": false,
    "status": "coming_soon",
    "rounds": []
  },
  {
    "grade": 6,
    "title": "Lớp 6",
    "subtitle": "Ngữ Văn Khám Phá",
    "icon": "📖",
    "color": "from-rose-400 to-pink-600",
    "hasAudio": false,
    "status": "coming_soon",
    "rounds": []
  },
  {
    "grade": 7,
    "title": "Lớp 7",
    "subtitle": "Văn Học Tinh Hoa",
    "icon": "✍️",
    "color": "from-cyan-500 to-blue-700",
    "hasAudio": false,
    "status": "coming_soon",
    "rounds": []
  },
  {
    "grade": 8,
    "title": "Lớp 8",
    "subtitle": "Hành Trang Tri Thức",
    "icon": "🧭",
    "color": "from-teal-500 to-emerald-700",
    "hasAudio": false,
    "status": "coming_soon",
    "rounds": []
  },
  {
    "grade": 9,
    "title": "Lớp 9",
    "subtitle": "Vượt Vũ Môn Hóa Rồng",
    "icon": "👑",
    "color": "from-fuchsia-500 to-purple-800",
    "hasAudio": false,
    "status": "coming_soon",
    "rounds": []
  }
]
,
  lop1: {
    "vong-5": {
    "roundId":  "vong-5",
    "roundName":  "Vòng 5 - Thi Sơ Khảo",
    "description":  "Bộ đề thi Trạng Nguyên Tiếng Việt Lớp 1 - Vòng 5 Sơ khảo cấp trường",
    "grade":  1,
    "exams":  [
                  {
                      "duration":  1200,
                      "title":  "Đề số 1",
                      "sections":  [
                                       {
                                           "instruction":  "Em hãy xếp các từ dưới đây vào đúng giỏ vần tương ứng nhé!",
                                           "title":  "Bài 1. Thả từ vào giỏ chủ đề thích hợp",
                                           "items":  [
                                                         {
                                                             "text":  "Bắt cá",
                                                             "basketId":  "b1"
                                                         },
                                                         {
                                                             "text":  "Khăn mặt",
                                                             "basketId":  "b1"
                                                         },
                                                         {
                                                             "text":  "Chủ nhật",
                                                             "basketId":  "b2"
                                                         },
                                                         {
                                                             "text":  "Bật lửa",
                                                             "basketId":  "b2"
                                                         },
                                                         {
                                                             "text":  "Lật đật",
                                                             "basketId":  "b2"
                                                         },
                                                         {
                                                             "text":  "Thịt gà",
                                                             "basketId":  "b3"
                                                         },
                                                         {
                                                             "text":  "Quả mít",
                                                             "basketId":  "b3"
                                                         }
                                                     ],
                                           "baskets":  [
                                                           {
                                                               "label":  "Có vần \u0027ăt\u0027",
                                                               "color":  "from-amber-400 to-orange-500",
                                                               "id":  "b1"
                                                           },
                                                           {
                                                               "label":  "Có vần \u0027ât\u0027",
                                                               "color":  "from-emerald-400 to-teal-500",
                                                               "id":  "b2"
                                                           },
                                                           {
                                                               "label":  "Có vần \u0027it\u0027",
                                                               "color":  "from-sky-400 to-blue-500",
                                                               "id":  "b3"
                                                           }
                                                       ],
                                           "type":  "basket"
                                       },
                                       {
                                           "instruction":  "Em hãy bấm chọn một ô bên trái rồi bấm tiếp ô bên phải phù hợp để ghép thành từ đúng nhé!",
                                           "title":  "Bài 2. Mèo con nhanh nhẹn - Nối cặp từ thích hợp",
                                           "type":  "match",
                                           "pairs":  [
                                                         {
                                                             "left":  "Cơn",
                                                             "right":  "mưa"
                                                         },
                                                         {
                                                             "left":  "Quả",
                                                             "right":  "ớt"
                                                         },
                                                         {
                                                             "left":  "Dế",
                                                             "right":  "mèn"
                                                         },
                                                         {
                                                             "left":  "Cà",
                                                             "right":  "rốt"
                                                         },
                                                         {
                                                             "left":  "Khuôn",
                                                             "right":  "mặt"
                                                         },
                                                         {
                                                             "left":  "Bếp",
                                                             "right":  "ga"
                                                         },
                                                         {
                                                             "left":  "Hòn",
                                                             "right":  "đá"
                                                         },
                                                         {
                                                             "left":  "Tuốt",
                                                             "right":  "lúa"
                                                         },
                                                         {
                                                             "left":  "Bác",
                                                             "right":  "sĩ"
                                                         },
                                                         {
                                                             "left":  "Giặt",
                                                             "right":  "giũ"
                                                         }
                                                     ]
                                       },
                                       {
                                           "instruction":  "Em hãy quan sát tranh và chọn chữ cái hoặc vần thích hợp để hoàn thành câu nhé!",
                                           "title":  "Bài 3. Chuột con nhanh trí - Điền từ vào chỗ trống",
                                           "questions":  [
                                                             {
                                                                 "explanation":  "Thành ngữ: Chị ngã em nâng",
                                                                 "answer":  "n",
                                                                 "id":  1,
                                                                 "question":  "Điền l hoặc n vào chỗ trống: Chị ngã em ......âng.",
                                                                 "options":  [
                                                                                 "l",
                                                                                 "n"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Con giun bò trên mặt đất",
                                                                 "answer":  "un",
                                                                 "id":  2,
                                                                 "question":  "Điền vần un hoặc um: Con gi...... bò trên mặt đất.",
                                                                 "options":  [
                                                                                 "un",
                                                                                 "um"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Món ăn: nem rán",
                                                                 "answer":  "n",
                                                                 "id":  3,
                                                                 "question":  "Điền l hoặc n: Mẹ rán ......em cho bé Nga.",
                                                                 "options":  [
                                                                                 "l",
                                                                                 "n"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Chợ quê",
                                                                 "answer":  "qu",
                                                                 "id":  4,
                                                                 "question":  "Điền c, k hoặc qu: Lò rèn ở phố đỏ lửa như ở chợ ......ê.",
                                                                 "options":  [
                                                                                 "c",
                                                                                 "k",
                                                                                 "qu"
                                                                             ]
                                                             },
                                                             {
                                                                 "id":  5,
                                                                 "answer":  "v",
                                                                 "explanation":  "Trong hình là con chim vẹt",
                                                                 "image":  "assets/images/v5_image7.png",
                                                                 "options":  [
                                                                                 "v",
                                                                                 "d",
                                                                                 "r",
                                                                                 "g"
                                                                             ],
                                                                 "question":  "Nhìn tranh và điền chữ cái phù hợp: chim ......ẹt."
                                                             },
                                                             {
                                                                 "explanation":  "Ven hồ (bờ hồ)",
                                                                 "answer":  "en",
                                                                 "id":  6,
                                                                 "question":  "Điền en hoặc em: Con cò bắt cá ở v...... hồ.",
                                                                 "options":  [
                                                                                 "en",
                                                                                 "em"
                                                                             ]
                                                             },
                                                             {
                                                                 "id":  7,
                                                                 "answer":  "g",
                                                                 "explanation":  "Trong hình là quả gấc chín đỏ",
                                                                 "image":  "assets/images/v5_image8.png",
                                                                 "options":  [
                                                                                 "g",
                                                                                 "c",
                                                                                 "k",
                                                                                 "q"
                                                                             ],
                                                                 "question":  "Nhìn tranh và điền chữ cái phù hợp: quả ......ấc."
                                                             },
                                                             {
                                                                 "explanation":  "Chín đỏ",
                                                                 "answer":  "ch",
                                                                 "id":  8,
                                                                 "question":  "Điền ch hoặc tr: Giàn nhót nhà bà ......ín đỏ.",
                                                                 "options":  [
                                                                                 "ch",
                                                                                 "tr"
                                                                             ]
                                                             },
                                                             {
                                                                 "id":  9,
                                                                 "answer":  "m",
                                                                 "explanation":  "Chú dế mèn",
                                                                 "image":  "assets/images/v5_image9.png",
                                                                 "options":  [
                                                                                 "m",
                                                                                 "n",
                                                                                 "l",
                                                                                 "h"
                                                                             ],
                                                                 "question":  "Nhìn tranh và điền chữ cái phù hợp: dế ......èn."
                                                             },
                                                             {
                                                                 "explanation":  "Mứt dừa",
                                                                 "answer":  "d",
                                                                 "id":  10,
                                                                 "question":  "Điền d, r hoặc gi: Mẹ làm mứt ......ừa cho bé.",
                                                                 "options":  [
                                                                                 "d",
                                                                                 "r",
                                                                                 "gi"
                                                                             ]
                                                             }
                                                         ],
                                           "type":  "quiz"
                                       }
                                   ],
                      "id":  "v5-de-1"
                  },
                  {
                      "duration":  1200,
                      "title":  "Đề số 2",
                      "sections":  [
                                       {
                                           "instruction":  "Bé hãy bấm vào ô vần và ô từ chứa vần tương ứng để ghép đôi nhé!",
                                           "title":  "Bài 1. Mèo con nhanh nhẹn - Nối cặp từ với vần phù hợp",
                                           "type":  "match",
                                           "pairs":  [
                                                         {
                                                             "left":  "Vần \u0027êt\u0027",
                                                             "right":  "Nết na"
                                                         },
                                                         {
                                                             "left":  "Vần \u0027ôt\u0027",
                                                             "right":  "Cột cờ"
                                                         },
                                                         {
                                                             "left":  "Vần \u0027uôn\u0027",
                                                             "right":  "Chuồn chuồn"
                                                         },
                                                         {
                                                             "left":  "Vần \u0027ên\u0027",
                                                             "right":  "Ốc sên"
                                                         },
                                                         {
                                                             "left":  "Vần \u0027ưt\u0027",
                                                             "right":  "Mứt dừa"
                                                         },
                                                         {
                                                             "left":  "Vần \u0027uc\u0027",
                                                             "right":  "Thể dục"
                                                         }
                                                     ]
                                       },
                                       {
                                           "instruction":  "Em hãy đọc kỹ câu hỏi và chọn đáp án chính xác nhất nhé!",
                                           "title":  "Bài 2. Trắc nghiệm thông thái",
                                           "questions":  [
                                                             {
                                                                 "explanation":  "Trong suốt",
                                                                 "answer":  "s",
                                                                 "id":  1,
                                                                 "question":  "Chọn chữ phù hợp để điền vào chỗ trống: trong ......uốt",
                                                                 "options":  [
                                                                                 "x",
                                                                                 "m",
                                                                                 "n",
                                                                                 "s"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Nàng tiên",
                                                                 "answer":  "iên",
                                                                 "id":  2,
                                                                 "question":  "Chọn vần thích hợp để điền vào từ sau: nàng t......",
                                                                 "options":  [
                                                                                 "iêp",
                                                                                 "iên",
                                                                                 "yên",
                                                                                 "iêng"
                                                                             ]
                                                             },
                                                             {
                                                                 "id":  3,
                                                                 "answer":  "Hoa súng",
                                                                 "explanation":  "Hoa súng có tiếng \u0027súng\u0027 chứa vần \u0027ung\u0027",
                                                                 "image":  "assets/images/v5_image15.png",
                                                                 "options":  [
                                                                                 "Hoa hồng",
                                                                                 "Hoa lan",
                                                                                 "Hoa cúc",
                                                                                 "Hoa súng"
                                                                             ],
                                                                 "question":  "Tên loài hoa nào dưới đây có vần \u0027ung\u0027?"
                                                             },
                                                             {
                                                                 "explanation":  "Tiếng \u0027nhót\u0027 có vần \u0027ot\u0027",
                                                                 "answer":  "ot",
                                                                 "id":  4,
                                                                 "question":  "Vần nào có trong câu: \u0027Giàn nhót của bà chín đỏ.\u0027?",
                                                                 "options":  [
                                                                                 "ong",
                                                                                 "ông",
                                                                                 "uôt",
                                                                                 "ot"
                                                                             ]
                                                             },
                                                             {
                                                                 "id":  5,
                                                                 "answer":  "củ gừng",
                                                                 "explanation":  "Trong hình là củ gừng",
                                                                 "image":  "assets/images/v5_image16.png",
                                                                 "options":  [
                                                                                 "củ hành",
                                                                                 "củ gừng",
                                                                                 "củ nghệ",
                                                                                 "củ tỏi"
                                                                             ],
                                                                 "question":  "Đây là củ gì?"
                                                             },
                                                             {
                                                                 "explanation":  "Tiếng \u0027sóc\u0027 có vần \u0027oc\u0027",
                                                                 "answer":  "con sóc",
                                                                 "id":  6,
                                                                 "question":  "Tên con vật nào có chứa vần \u0027oc\u0027?",
                                                                 "options":  [
                                                                                 "con ốc",
                                                                                 "con ong",
                                                                                 "con sóc",
                                                                                 "con chó"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Cà rốt (rốt), lá lốt (lốt), cột cờ (cột) đều có vần \u0027ôt\u0027",
                                                                 "answer":  "cà rốt, lá lốt, cột cờ",
                                                                 "id":  7,
                                                                 "question":  "Dòng nào dưới đây chỉ gồm các từ chứa tiếng có vần \u0027ôt\u0027?",
                                                                 "options":  [
                                                                                 "bột mì, cột nhà, đỏ chót",
                                                                                 "cà rốt, lá lốt, cột cờ",
                                                                                 "cà rốt, bột mì, quả ớt",
                                                                                 "quả nhót, cột nhà, cà rốt"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Củ lạc (tiếng \u0027lạc\u0027 có vần \u0027ac\u0027)",
                                                                 "answer":  "củ lạc",
                                                                 "id":  8,
                                                                 "question":  "Tên loại củ nào có chứa vần \u0027ac\u0027?",
                                                                 "options":  [
                                                                                 "củ cải",
                                                                                 "củ lạc",
                                                                                 "củ khoai",
                                                                                 "củ cà rốt"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Tiếng \u0027mông\u0027 có vần \u0027ông\u0027",
                                                                 "answer":  "mênh mông",
                                                                 "id":  9,
                                                                 "question":  "Từ nào dưới đây chứa tiếng có vần \u0027ông\u0027?",
                                                                 "options":  [
                                                                                 "chong chóng",
                                                                                 "mênh mông",
                                                                                 "lênh khênh",
                                                                                 "đóm đóm"
                                                                             ]
                                                             },
                                                             {
                                                                 "id":  10,
                                                                 "answer":  "con rết",
                                                                 "explanation":  "Trong hình là con rết",
                                                                 "image":  "assets/images/v5_image17.png",
                                                                 "options":  [
                                                                                 "con rết",
                                                                                 "con giun",
                                                                                 "con rắn",
                                                                                 "con trăn"
                                                                             ],
                                                                 "question":  "Đây là con gì?"
                                                             }
                                                         ],
                                           "type":  "quiz"
                                       }
                                   ],
                      "id":  "v5-de-2"
                  },
                  {
                      "duration":  1200,
                      "title":  "Đề số 3",
                      "sections":  [
                                       {
                                           "instruction":  "Bé hãy bấm chọn 2 ô tương ứng để ghép thành cặp từ đúng nhé!",
                                           "title":  "Bài 1. Mèo con nhanh nhẹn - Ghép cặp từ ngữ",
                                           "type":  "match",
                                           "pairs":  [
                                                         {
                                                             "left":  "Giá đỗ",
                                                             "right":  "Quả ớt"
                                                         },
                                                         {
                                                             "left":  "Cá chép",
                                                             "right":  "Thợ lặn"
                                                         },
                                                         {
                                                             "left":  "Con cua",
                                                             "right":  "Thỏ con"
                                                         },
                                                         {
                                                             "left":  "Cà rốt",
                                                             "right":  "Bí đỏ"
                                                         },
                                                         {
                                                             "left":  "Cá ngựa",
                                                             "right":  "Cây mía"
                                                         }
                                                     ]
                                       },
                                       {
                                           "instruction":  "Em hãy đọc kỹ và chọn đáp án đúng nhé!",
                                           "title":  "Bài 2. Chuột con nhanh trí - Trắc nghiệm kiến thức",
                                           "questions":  [
                                                             {
                                                                 "explanation":  "Giờ tan tầm",
                                                                 "answer":  "an",
                                                                 "id":  1,
                                                                 "question":  "Chọn vần thích hợp: Giờ t...... tầm, phố xá tấp nập, xe cộ đi rầm rập.",
                                                                 "options":  [
                                                                                 "ôm",
                                                                                 "ên",
                                                                                 "an",
                                                                                 "am"
                                                                             ]
                                                             },
                                                             {
                                                                 "id":  2,
                                                                 "answer":  "Bạn nhỏ chia quà.",
                                                                 "explanation":  "Bạn nhỏ đang chia quà cho các bạn",
                                                                 "image":  "assets/images/v5_image30.png",
                                                                 "options":  [
                                                                                 "Bạn nhỏ đi bộ.",
                                                                                 "Bạn nhỏ chia quà.",
                                                                                 "Bạn nhỏ tô vẽ.",
                                                                                 "Bạn nhỏ đi đò."
                                                                             ],
                                                                 "question":  "Bạn nhỏ trong tranh đang làm gì?"
                                                             },
                                                             {
                                                                 "explanation":  "Tiếng đệm có vần êm",
                                                                 "answer":  "đệm",
                                                                 "id":  3,
                                                                 "question":  "Tiếng nào dưới đây có vần \u0027êm\u0027?",
                                                                 "options":  [
                                                                                 "đệm",
                                                                                 "đốm",
                                                                                 "rơm",
                                                                                 "nem"
                                                                             ]
                                                             },
                                                             {
                                                                 "id":  4,
                                                                 "answer":  "con đom đóm",
                                                                 "explanation":  "Con đom đóm có vần om",
                                                                 "image":  "assets/images/v5_image31.png",
                                                                 "options":  [
                                                                                 "con đom đóm",
                                                                                 "con ong",
                                                                                 "con bướm",
                                                                                 "con chuồn chuồn"
                                                                             ],
                                                                 "question":  "Tên con vật nào chứa tiếng có vần \u0027om\u0027?"
                                                             },
                                                             {
                                                                 "id":  5,
                                                                 "answer":  "con hà mã",
                                                                 "explanation":  "Trong hình là con hà mã",
                                                                 "image":  "assets/images/v5_image32.png",
                                                                 "options":  [
                                                                                 "con lợn",
                                                                                 "con chó",
                                                                                 "con tôm",
                                                                                 "con hà mã"
                                                                             ],
                                                                 "question":  "Đây là con gì?"
                                                             },
                                                             {
                                                                 "explanation":  "Tiếng \u0027chẫm\u0027, \u0027chầm\u0027 có vần âm",
                                                                 "answer":  "âm",
                                                                 "id":  6,
                                                                 "question":  "Vần nào có trong đoạn thơ sau: \u0027Bé Na đi lẫm chẫm / Đến bên chị ôm chầm / Chị ôm hôn trán bé / Và nô đùa trên sân.\u0027?",
                                                                 "options":  [
                                                                                 "am",
                                                                                 "ơm",
                                                                                 "om",
                                                                                 "âm"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Tấm thảm len",
                                                                 "answer":  "l",
                                                                 "id":  7,
                                                                 "question":  "Chọn chữ thích hợp để điền vào chỗ chấm: tấm thảm ......en",
                                                                 "options":  [
                                                                                 "n",
                                                                                 "v",
                                                                                 "l",
                                                                                 "m"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Đều có vần an",
                                                                 "answer":  "an",
                                                                 "id":  8,
                                                                 "question":  "Các tiếng \u0027gan\u0027, \u0027trán\u0027, \u0027cạn\u0027 có chung vần gì?",
                                                                 "options":  [
                                                                                 "ăn",
                                                                                 "en",
                                                                                 "an",
                                                                                 "ân"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Con bò sữa",
                                                                 "answer":  "bò sữa",
                                                                 "id":  9,
                                                                 "question":  "Giải câu đố: \u0027Con gì ăn cỏ / Cho bé sữa ngon?\u0027",
                                                                 "options":  [
                                                                                 "sư tử",
                                                                                 "hà mã",
                                                                                 "bò sữa",
                                                                                 "ngựa vằn"
                                                                             ]
                                                             }
                                                         ],
                                           "type":  "quiz"
                                       }
                                   ],
                      "id":  "v5-de-3"
                  },
                  {
                      "duration":  1200,
                      "title":  "Đề số 4",
                      "sections":  [
                                       {
                                           "instruction":  "Bé hãy bấm chọn 2 ô để ghép đôi chính xác nhé!",
                                           "title":  "Bài 1. Mèo con nhanh nhẹn - Ghép đôi",
                                           "type":  "match",
                                           "pairs":  [
                                                         {
                                                             "left":  "Búp bê",
                                                             "right":  "Mũ len"
                                                         },
                                                         {
                                                             "left":  "Tấm rèm",
                                                             "right":  "Quả dừa"
                                                         },
                                                         {
                                                             "left":  "Hộp quà",
                                                             "right":  "Ốc sên"
                                                         },
                                                         {
                                                             "left":  "Xe đạp",
                                                             "right":  "Đua ngựa"
                                                         },
                                                         {
                                                             "left":  "Số bốn",
                                                             "right":  "4"
                                                         }
                                                     ]
                                       },
                                       {
                                           "instruction":  "Bé hãy đọc kỹ và trả lời các câu hỏi sau nhé!",
                                           "title":  "Bài 2. Trắc nghiệm thông minh",
                                           "questions":  [
                                                             {
                                                                 "explanation":  "Con ve sầu kêu râm ran mùa hè",
                                                                 "answer":  "con ve",
                                                                 "id":  1,
                                                                 "question":  "Giải câu đố: \u0027Con gì ra rả / Râm ran cả hè?\u0027",
                                                                 "options":  [
                                                                                 "con lợn",
                                                                                 "con ong",
                                                                                 "con ve",
                                                                                 "con sóc"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Bản tin thời sự",
                                                                 "answer":  "in",
                                                                 "id":  2,
                                                                 "question":  "Chọn vần thích hợp để điền vào chỗ chấm: Bố xem bản t...... trên ti vi.",
                                                                 "options":  [
                                                                                 "in",
                                                                                 "âm",
                                                                                 "am",
                                                                                 "ên"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Cơm, sớm, thơm đều có vần ơm",
                                                                 "answer":  "ơm",
                                                                 "id":  3,
                                                                 "question":  "Các tiếng \u0027cơm\u0027, \u0027sớm\u0027, \u0027thơm\u0027 có chung vần gì?",
                                                                 "options":  [
                                                                                 "am",
                                                                                 "ơm",
                                                                                 "ôm",
                                                                                 "om"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Que kem có vần em",
                                                                 "answer":  "kem",
                                                                 "id":  4,
                                                                 "question":  "Tiếng nào dưới đây có vần \u0027em\u0027?",
                                                                 "options":  [
                                                                                 "tép",
                                                                                 "kem",
                                                                                 "sen",
                                                                                 "nét"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Chim sơn ca",
                                                                 "answer":  "s",
                                                                 "id":  5,
                                                                 "question":  "Chọn chữ thích hợp điền vào chỗ trống: chim ......ơn ca",
                                                                 "options":  [
                                                                                 "l",
                                                                                 "s",
                                                                                 "n",
                                                                                 "x"
                                                                             ]
                                                             }
                                                         ],
                                           "type":  "quiz"
                                       }
                                   ],
                      "id":  "v5-de-4"
                  }
              ]
},
    "vong-6": {
    "roundId":  "vong-6",
    "roundName":  "Vòng 6 - Thi Hương",
    "description":  "Bộ đề thi Trạng Nguyên Tiếng Việt Lớp 1 - Vòng 6 Thi Hương cấp Quận/Huyện",
    "grade":  1,
    "exams":  [
                  {
                      "duration":  1200,
                      "title":  "Đề số 1",
                      "sections":  [
                                       {
                                           "instruction":  "Bé hãy bấm chọn một ô bên trái rồi nối với ô bên phải để tạo thành câu có nghĩa nhé!",
                                           "title":  "Bài 1. Mèo con nhanh nhẹn - Ghép vế câu hoàn chỉnh",
                                           "type":  "match",
                                           "pairs":  [
                                                         {
                                                             "left":  "Đàn dê",
                                                             "right":  "kêu be be."
                                                         },
                                                         {
                                                             "left":  "Trời mưa",
                                                             "right":  "xối xả."
                                                         },
                                                         {
                                                             "left":  "Con mèo",
                                                             "right":  "đang rình bắt chuột."
                                                         },
                                                         {
                                                             "left":  "Giếng nước",
                                                             "right":  "trong veo."
                                                         },
                                                         {
                                                             "left":  "Ngôi nhà",
                                                             "right":  "cao năm tầng."
                                                         },
                                                         {
                                                             "left":  "Đàn cò",
                                                             "right":  "bay là trên cánh đồng."
                                                         },
                                                         {
                                                             "left":  "Thầy cô",
                                                             "right":  "dạy học."
                                                         },
                                                         {
                                                             "left":  "Con lợn",
                                                             "right":  "ủn ỉn."
                                                         },
                                                         {
                                                             "left":  "Cành vải",
                                                             "right":  "sai trĩu quả."
                                                         },
                                                         {
                                                             "left":  "Hoa mai",
                                                             "right":  "nở vào mùa xuân."
                                                         }
                                                     ]
                                       },
                                       {
                                           "instruction":  "Em hãy bấm vào từng từ theo đúng thứ tự để tạo thành câu hoàn chỉnh nhé!",
                                           "title":  "Bài 2. Hổ con thiên tài - Sắp xếp từ thành câu hoàn chỉnh",
                                           "questions":  [
                                                             {
                                                                 "sentence":  "Nhà sạch thì mát",
                                                                 "id":  1,
                                                                 "words":  [
                                                                               "thì",
                                                                               "sạch",
                                                                               "Nhà",
                                                                               "mát"
                                                                           ],
                                                                 "answer":  [
                                                                                "Nhà",
                                                                                "sạch",
                                                                                "thì",
                                                                                "mát"
                                                                            ]
                                                             },
                                                             {
                                                                 "sentence":  "Giếng khoan sâu hoắm .",
                                                                 "id":  2,
                                                                 "words":  [
                                                                               "sâu",
                                                                               "khoan",
                                                                               "hoắm",
                                                                               ".",
                                                                               "Giếng"
                                                                           ],
                                                                 "answer":  [
                                                                                "Giếng",
                                                                                "khoan",
                                                                                "sâu",
                                                                                "hoắm",
                                                                                "."
                                                                            ]
                                                             },
                                                             {
                                                                 "sentence":  "Trăm hoa khoe sắc .",
                                                                 "id":  3,
                                                                 "words":  [
                                                                               "sắc",
                                                                               "hoa",
                                                                               "Trăm",
                                                                               ".",
                                                                               "khoe"
                                                                           ],
                                                                 "answer":  [
                                                                                "Trăm",
                                                                                "hoa",
                                                                                "khoe",
                                                                                "sắc",
                                                                                "."
                                                                            ]
                                                             },
                                                             {
                                                                 "sentence":  "Bát sạch ngon cơm",
                                                                 "id":  4,
                                                                 "words":  [
                                                                               "cơm",
                                                                               "Bát",
                                                                               "ngon",
                                                                               "sạch"
                                                                           ],
                                                                 "answer":  [
                                                                                "Bát",
                                                                                "sạch",
                                                                                "ngon",
                                                                                "cơm"
                                                                            ]
                                                             },
                                                             {
                                                                 "sentence":  "Mẹ bị ốm .",
                                                                 "id":  5,
                                                                 "words":  [
                                                                               "ốm",
                                                                               ".",
                                                                               "bị",
                                                                               "Mẹ"
                                                                           ],
                                                                 "answer":  [
                                                                                "Mẹ",
                                                                                "bị",
                                                                                "ốm",
                                                                                "."
                                                                            ]
                                                             },
                                                             {
                                                                 "sentence":  "Hoa cúc màu vàng .",
                                                                 "id":  6,
                                                                 "words":  [
                                                                               "vàng",
                                                                               "Hoa",
                                                                               "màu",
                                                                               ".",
                                                                               "cúc"
                                                                           ],
                                                                 "answer":  [
                                                                                "Hoa",
                                                                                "cúc",
                                                                                "màu",
                                                                                "vàng",
                                                                                "."
                                                                            ]
                                                             },
                                                             {
                                                                 "sentence":  "Hoa huệ trắng tinh .",
                                                                 "id":  7,
                                                                 "words":  [
                                                                               "tinh",
                                                                               ".",
                                                                               "trắng",
                                                                               "Hoa",
                                                                               "huệ"
                                                                           ],
                                                                 "answer":  [
                                                                                "Hoa",
                                                                                "huệ",
                                                                                "trắng",
                                                                                "tinh",
                                                                                "."
                                                                            ]
                                                             },
                                                             {
                                                                 "sentence":  "Chim vành khuyên đang bay .",
                                                                 "id":  8,
                                                                 "words":  [
                                                                               "vành",
                                                                               "Chim",
                                                                               "đang",
                                                                               "khuyên",
                                                                               ".",
                                                                               "bay"
                                                                           ],
                                                                 "answer":  [
                                                                                "Chim",
                                                                                "vành",
                                                                                "khuyên",
                                                                                "đang",
                                                                                "bay",
                                                                                "."
                                                                            ]
                                                             },
                                                             {
                                                                 "sentence":  "Bé đạp xe trên sân .",
                                                                 "id":  9,
                                                                 "words":  [
                                                                               "trên",
                                                                               "đạp",
                                                                               "Bé",
                                                                               "sân",
                                                                               ".",
                                                                               "xe"
                                                                           ],
                                                                 "answer":  [
                                                                                "Bé",
                                                                                "đạp",
                                                                                "xe",
                                                                                "trên",
                                                                                "sân",
                                                                                "."
                                                                            ]
                                                             },
                                                             {
                                                                 "sentence":  "Quả na có vị ngọt .",
                                                                 "id":  10,
                                                                 "words":  [
                                                                               "có",
                                                                               "na",
                                                                               "vị",
                                                                               "Quả",
                                                                               "ngọt",
                                                                               "."
                                                                           ],
                                                                 "answer":  [
                                                                                "Quả",
                                                                                "na",
                                                                                "có",
                                                                                "vị",
                                                                                "ngọt",
                                                                                "."
                                                                            ]
                                                             }
                                                         ],
                                           "type":  "sort"
                                       },
                                       {
                                           "instruction":  "Bé hãy đọc kỹ câu hỏi và chọn đáp án đúng nhất nhé!",
                                           "title":  "Bài 3. Trắc nghiệm Trạng Nguyên",
                                           "questions":  [
                                                             {
                                                                 "explanation":  "Tốt và xấu là hai từ trái nghĩa nhau",
                                                                 "answer":  "tốt",
                                                                 "id":  1,
                                                                 "question":  "Ngược với từ \u0027xấu\u0027 gọi là gì?",
                                                                 "options":  [
                                                                                 "đen",
                                                                                 "tốt",
                                                                                 "tươi",
                                                                                 "dữ"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Lúa gạo là danh từ chỉ lương thực",
                                                                 "answer":  "lúa gạo",
                                                                 "id":  2,
                                                                 "question":  "Từ nào dưới đây KHÔNG chỉ màu sắc?",
                                                                 "options":  [
                                                                                 "đỏ rực",
                                                                                 "lúa gạo",
                                                                                 "tím ngắt",
                                                                                 "vàng tươi"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Con tàu là phương tiện giao thông",
                                                                 "answer":  "con tàu",
                                                                 "id":  3,
                                                                 "question":  "Từ nào dưới đây KHÔNG chỉ con vật?",
                                                                 "options":  [
                                                                                 "con ong",
                                                                                 "con gà",
                                                                                 "con chim",
                                                                                 "con tàu"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Người làm thơ gọi là nhà thơ",
                                                                 "answer":  "nhà thơ",
                                                                 "id":  4,
                                                                 "question":  "Người sáng tác thơ ca được gọi là gì?",
                                                                 "options":  [
                                                                                 "thầy giáo",
                                                                                 "nhà thơ",
                                                                                 "nhà báo",
                                                                                 "công an"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Cả \u0027trơn\u0027 và \u0027cơn\u0027 đều có vần ơn",
                                                                 "answer":  "trơn, cơn",
                                                                 "id":  5,
                                                                 "question":  "Những từ nào có vần \u0027ơn\u0027 trong câu: \u0027Mẹ Bống đi chợ đường trơn / Bống ra gánh đỡ chạy cơn mưa ròng.\u0027?",
                                                                 "options":  [
                                                                                 "chợ",
                                                                                 "trơn",
                                                                                 "cơn",
                                                                                 "trơn, cơn"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Con hổ là loài vật sống trong rừng sâu",
                                                                 "answer":  "hổ",
                                                                 "id":  6,
                                                                 "question":  "Trong các từ sau, từ nào chỉ con vật sống trong rừng?",
                                                                 "options":  [
                                                                                 "hổ",
                                                                                 "trâu",
                                                                                 "ngan",
                                                                                 "vịt"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Công nhân làm việc trong các nhà máy, xí nghiệp",
                                                                 "answer":  "anh công nhân",
                                                                 "id":  7,
                                                                 "question":  "Chọn từ phù hợp: \u0027...... làm việc trong nhà máy.\u0027?",
                                                                 "options":  [
                                                                                 "chú công an",
                                                                                 "cô giáo em",
                                                                                 "bác nông dân",
                                                                                 "anh công nhân"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Chiếc bóng đèn điện thắp sáng trong nhà",
                                                                 "answer":  "bóng đèn",
                                                                 "id":  8,
                                                                 "question":  "Giải câu đố: \u0027Cái gì bật sáng trong đêm / Giúp cho nhà dưới, nhà trên sáng ngời?\u0027",
                                                                 "options":  [
                                                                                 "bóng bay",
                                                                                 "bật lửa",
                                                                                 "bóng đèn",
                                                                                 "đom đóm"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Tiếng \u0027xuyến\u0027 có vần uyên",
                                                                 "answer":  "xuyến",
                                                                 "id":  9,
                                                                 "question":  "Từ nào chứa vần \u0027uyên\u0027 trong câu: \u0027Hoa xao xuyến nở / Như mây từng chùm.\u0027?",
                                                                 "options":  [
                                                                                 "yêu",
                                                                                 "xoan",
                                                                                 "xuyến",
                                                                                 "chùm"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Chim cánh cụt bơi lội và lặn rất giỏi dưới biển",
                                                                 "answer":  "chim cánh cụt",
                                                                 "id":  10,
                                                                 "question":  "Trong các loài chim sau, loài nào có thể bơi lặn giỏi dưới nước?",
                                                                 "options":  [
                                                                                 "chim sơn ca",
                                                                                 "chim cánh cụt",
                                                                                 "chim bồ câu",
                                                                                 "chim chiền chiện"
                                                                             ]
                                                             }
                                                         ],
                                           "type":  "quiz"
                                       }
                                   ],
                      "id":  "v6-de-1"
                  },
                  {
                      "duration":  1200,
                      "title":  "Đề số 2",
                      "sections":  [
                                       {
                                           "instruction":  "Bé hãy chọn chữ cái hoặc từ thích hợp để điền vào chỗ chấm nhé!",
                                           "title":  "Bài 1. Điền từ vào câu thành ngữ, tục ngữ",
                                           "questions":  [
                                                             {
                                                                 "explanation":  "Thành ngữ: Anh em như thể chân tay",
                                                                 "answer":  "tay",
                                                                 "id":  1,
                                                                 "question":  "Điền từ còn thiếu: Anh em như thể chân ......",
                                                                 "options":  [
                                                                                 "tay",
                                                                                 "chân",
                                                                                 "mắt",
                                                                                 "đầu"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Tục ngữ: Rách lành đùm bọc dở hay đỡ đần",
                                                                 "answer":  "hay",
                                                                 "id":  2,
                                                                 "question":  "Điền từ còn thiếu: Rách lành đùm bọc dở ...... đỡ đần",
                                                                 "options":  [
                                                                                 "tốt",
                                                                                 "hay",
                                                                                 "ngoan",
                                                                                 "khéo"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Thành công",
                                                                 "answer":  "th",
                                                                 "id":  3,
                                                                 "question":  "Điền chữ cái: Thất bại là mẹ ......ành công.",
                                                                 "options":  [
                                                                                 "th",
                                                                                 "ch",
                                                                                 "tr",
                                                                                 "kh"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Rách (Giấy rách phải giữ lấy lề)",
                                                                 "answer":  "r",
                                                                 "id":  4,
                                                                 "question":  "Điền chữ cái: Giấy ......ách phải giữ lấy lề.",
                                                                 "options":  [
                                                                                 "r",
                                                                                 "d",
                                                                                 "gi",
                                                                                 "s"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Nhớ (Uống nước nhớ nguồn)",
                                                                 "answer":  "nh",
                                                                 "id":  5,
                                                                 "question":  "Điền chữ cái: Uống nước ......ớ nguồn.",
                                                                 "options":  [
                                                                                 "nh",
                                                                                 "ng",
                                                                                 "ngh",
                                                                                 "gh"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Thầy (Kính thầy yêu bạn)",
                                                                 "answer":  "th",
                                                                 "id":  6,
                                                                 "question":  "Điền chữ cái: Kính ......ầy yêu bạn.",
                                                                 "options":  [
                                                                                 "th",
                                                                                 "ch",
                                                                                 "tr",
                                                                                 "kh"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Sạch (Đói cho sạch, rách cho thơm)",
                                                                 "answer":  "s",
                                                                 "id":  7,
                                                                 "question":  "Điền chữ cái: Đói cho ......ạch rách cho thơm.",
                                                                 "options":  [
                                                                                 "s",
                                                                                 "x",
                                                                                 "ch",
                                                                                 "tr"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Non (Một cây làm chẳng nên non)",
                                                                 "answer":  "n",
                                                                 "id":  8,
                                                                 "question":  "Điền chữ cái: Một cây làm chẳng nên ......on.",
                                                                 "options":  [
                                                                                 "n",
                                                                                 "l",
                                                                                 "m",
                                                                                 "h"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Núi (Hòn núi cao)",
                                                                 "answer":  "n",
                                                                 "id":  9,
                                                                 "question":  "Điền chữ cái: Ba cây chụm lại nên hòn ......úi cao.",
                                                                 "options":  [
                                                                                 "n",
                                                                                 "l",
                                                                                 "m",
                                                                                 "d"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Thỏ đế (Nhát như thỏ đế)",
                                                                 "answer":  "th",
                                                                 "id":  10,
                                                                 "question":  "Điền chữ cái: Nhát như ......ỏ đế.",
                                                                 "options":  [
                                                                                 "th",
                                                                                 "ch",
                                                                                 "tr",
                                                                                 "kh"
                                                                             ]
                                                             }
                                                         ],
                                           "type":  "quiz"
                                       },
                                       {
                                           "instruction":  "Em hãy quan sát và chọn đáp án chính xác nhất nhé!",
                                           "title":  "Bài 2. Trắc nghiệm hình ảnh và câu đố",
                                           "questions":  [
                                                             {
                                                                 "explanation":  "Cọng rơm vàng mùa gặt",
                                                                 "answer":  "vàng",
                                                                 "id":  1,
                                                                 "question":  "Từ nào thích hợp điền vào câu: \u0027Tiếng chim rơi ngọt quá! / Khẽ động cọng rơm ......\u0027?",
                                                                 "options":  [
                                                                                 "xanh",
                                                                                 "trắng",
                                                                                 "vàng",
                                                                                 "đỏ"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Trái gấc chín đỏ",
                                                                 "answer":  "gấc",
                                                                 "id":  2,
                                                                 "question":  "Điền từ còn thiếu: \u0027Trái ...... xinh xinh / Nắng vàng chín đỏ / Bao nhiêu mặt trời / Ngủ say trong đó.\u0027?",
                                                                 "options":  [
                                                                                 "na",
                                                                                 "chuối",
                                                                                 "gấc",
                                                                                 "táo"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Loài kiến chăm chỉ tha mồi về tổ",
                                                                 "answer":  "con kiến",
                                                                 "id":  3,
                                                                 "question":  "Giải câu đố: \u0027Con gì bé tí / Đi lại từng đàn / Kiếm được mồi ngon / Cùng tha về tổ?\u0027",
                                                                 "options":  [
                                                                                 "con dế",
                                                                                 "con muỗi",
                                                                                 "con ong",
                                                                                 "con kiến"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Viết đúng phải là \u0027giọt sương\u0027 chứ không phải \u0027xương\u0027",
                                                                 "answer":  "xương",
                                                                 "id":  4,
                                                                 "question":  "Từ nào trong khổ thơ viết sai chính tả: \u0027Hạt xương bé tí tẹo / Đựng cả ông mặt trời / Ai treo trên ngọn cỏ / Lung linh mà không rơi.\u0027?",
                                                                 "options":  [
                                                                                 "treo",
                                                                                 "trời",
                                                                                 "rơi",
                                                                                 "xương"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Nhà sạch thì mát, bát sạch ngon cơm",
                                                                 "answer":  "mát",
                                                                 "id":  5,
                                                                 "question":  "Điền từ còn thiếu vào câu tục ngữ: \u0027Nhà sạch thì ......, bát sạch ngon cơm.\u0027?",
                                                                 "options":  [
                                                                                 "đẹp",
                                                                                 "tốt",
                                                                                 "thích",
                                                                                 "mát"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Luật chính tả: k chỉ đi với i, e, ê",
                                                                 "answer":  "i, e, ê",
                                                                 "id":  6,
                                                                 "question":  "Chữ cái \u0027k\u0027 chỉ có thể ghép với những nguyên âm nào?",
                                                                 "options":  [
                                                                                 "a, ă, â",
                                                                                 "i, u, ư",
                                                                                 "o, ô, ơ",
                                                                                 "i, e, ê"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Con gà mái đẻ trứng ấp ra gà con lông vàng óng",
                                                                 "answer":  "gà mái",
                                                                 "id":  7,
                                                                 "question":  "Giải câu đố: \u0027Con gì quang quác / Cục tác cục te / Đẻ trứng tròn xoe / Nở bông vàng bé?\u0027",
                                                                 "options":  [
                                                                                 "bồ câu",
                                                                                 "vịt",
                                                                                 "gà trống",
                                                                                 "gà mái"
                                                                             ]
                                                             }
                                                         ],
                                           "type":  "quiz"
                                       }
                                   ],
                      "id":  "v6-de-2"
                  },
                  {
                      "duration":  1200,
                      "title":  "Đề số 3",
                      "sections":  [
                                       {
                                           "instruction":  "Bé hãy chọn từ hoặc chữ cái điền vào chỗ chấm nhé!",
                                           "title":  "Bài 1. Điền từ thành ngữ \u0026 tục ngữ",
                                           "questions":  [
                                                             {
                                                                 "explanation":  "Dám làm",
                                                                 "answer":  "d",
                                                                 "id":  1,
                                                                 "question":  "Điền chữ cái: Dám nghĩ ......ám làm.",
                                                                 "options":  [
                                                                                 "d",
                                                                                 "g",
                                                                                 "gi",
                                                                                 "r"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Muôn người như một",
                                                                 "answer":  "ng",
                                                                 "id":  2,
                                                                 "question":  "Điền chữ cái: Muôn ......ười như một.",
                                                                 "options":  [
                                                                                 "ng",
                                                                                 "ngh",
                                                                                 "nh",
                                                                                 "gh"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Một con ngựa đau cả tàu bỏ cỏ",
                                                                 "answer":  "con",
                                                                 "id":  3,
                                                                 "question":  "Điền từ: Một ...... ngựa đau cả tàu bỏ cỏ.",
                                                                 "options":  [
                                                                                 "con",
                                                                                 "chú",
                                                                                 "đàn",
                                                                                 "bầy"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Chín điều lành",
                                                                 "answer":  "l",
                                                                 "id":  4,
                                                                 "question":  "Điền chữ cái: Một điều nhịn chín điều ......ành.",
                                                                 "options":  [
                                                                                 "l",
                                                                                 "n",
                                                                                 "m",
                                                                                 "h"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Công cha như núi Thái Sơn",
                                                                 "answer":  "cha",
                                                                 "id":  5,
                                                                 "question":  "Điền từ: Công ...... như núi Thái Sơn.",
                                                                 "options":  [
                                                                                 "cha",
                                                                                 "mẹ",
                                                                                 "thầy",
                                                                                 "ông"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Trong nguồn (nước trong nguồn)",
                                                                 "answer":  "tr",
                                                                 "id":  6,
                                                                 "question":  "Điền chữ cái: Nghĩa mẹ như nước ......ong nguồn chảy ra.",
                                                                 "options":  [
                                                                                 "tr",
                                                                                 "ch",
                                                                                 "t",
                                                                                 "c"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Đá nhau",
                                                                 "answer":  "n",
                                                                 "id":  7,
                                                                 "question":  "Điền chữ cái: Gà cùng một mẹ chớ hoài đá ......au.",
                                                                 "options":  [
                                                                                 "n",
                                                                                 "m",
                                                                                 "s",
                                                                                 "x"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Rụng (Lá rụng về cội)",
                                                                 "answer":  "r",
                                                                 "id":  8,
                                                                 "question":  "Điền chữ cái: Lá ......ụng về cội.",
                                                                 "options":  [
                                                                                 "r",
                                                                                 "d",
                                                                                 "gi",
                                                                                 "l"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Khôn (học một sàng khôn)",
                                                                 "answer":  "kh",
                                                                 "id":  9,
                                                                 "question":  "Điền chữ cái: Đi một ngày đàng học một sàng ......ôn.",
                                                                 "options":  [
                                                                                 "kh",
                                                                                 "k",
                                                                                 "c",
                                                                                 "qu"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Khôn ngoan",
                                                                 "answer":  "ng",
                                                                 "id":  10,
                                                                 "question":  "Điền chữ cái: Khôn ......oan đối đáp người ngoài.",
                                                                 "options":  [
                                                                                 "ng",
                                                                                 "ngh",
                                                                                 "nh",
                                                                                 "gh"
                                                                             ]
                                                             }
                                                         ],
                                           "type":  "quiz"
                                       },
                                       {
                                           "instruction":  "Bé hãy chọn đáp án đúng cho các câu hỏi sau nhé!",
                                           "title":  "Bài 2. Trắc nghiệm kiến thức tổng hợp",
                                           "questions":  [
                                                             {
                                                                 "explanation":  "Mặt trời mọc buổi sáng",
                                                                 "answer":  "trời",
                                                                 "id":  1,
                                                                 "question":  "Điền từ thích hợp vào chỗ chấm: \u0027Mặt ...... tỉnh giấc / Hai má ửng hồng / Từng đám mây bông / Vươn vai thức dậy.\u0027?",
                                                                 "options":  [
                                                                                 "trăng",
                                                                                 "trời",
                                                                                 "biển",
                                                                                 "sông"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Mùa thu tựu trường, trái bàng chín vàng",
                                                                 "answer":  "thu",
                                                                 "id":  2,
                                                                 "question":  "Điền từ thích hợp vào chỗ chấm: \u0027Em vào năm học mới / Mùa ...... chín trên cây / Những trái bàng thơm ngát / Hương bay tận trời mây.\u0027?",
                                                                 "options":  [
                                                                                 "xuân",
                                                                                 "hạ",
                                                                                 "thu",
                                                                                 "đông"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Chú ong chăm chỉ hút mật tìm hoa",
                                                                 "answer":  "ong",
                                                                 "id":  3,
                                                                 "question":  "Điền tên con vật thích hợp: \u0027Con ...... chăm chỉ lên đường tìm hoa.\u0027?",
                                                                 "options":  [
                                                                                 "kiến",
                                                                                 "ong",
                                                                                 "ve",
                                                                                 "sâu"
                                                                             ]
                                                             },
                                                             {
                                                                 "explanation":  "Viết đúng phải là \u0027hoa sen\u0027",
                                                                 "answer":  "xen",
                                                                 "id":  4,
                                                                 "question":  "Từ nào trong khổ thơ viết sai chính tả: \u0027Hoa xen đã nở / Rực rỡ đầy hồ / Thoang thoảng gió đưa / Mùi hương thơm ngát.\u0027?",
                                                                 "options":  [
                                                                                 "xen",
                                                                                 "nở",
                                                                                 "rực rỡ",
                                                                                 "hương"
                                                                             ]
                                                             }
                                                         ],
                                           "type":  "quiz"
                                       }
                                   ],
                      "id":  "v6-de-3"
                  }
              ]
}
  }
};