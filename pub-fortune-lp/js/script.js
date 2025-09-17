// 占いデータベース
const fortuneData = {
    // タロット占いデータ
    tarot: {
        cards: [
            {
                name: "愚者",
                meaning: "新しい始まり、自由な精神、冒険心",
                advice: "新しいことに挑戦する絶好のタイミングです。恐れずに一歩踏み出しましょう。",
                love: "新しい出会いが期待できます。",
                work: "創造性を活かせる機会が訪れます。",
                health: "心身ともにリフレッシュが必要です。"
            },
            {
                name: "魔術師",
                meaning: "意志力、創造力、実現力",
                advice: "あなたの持つ能力を存分に発揮できる時です。目標に向かって積極的に行動しましょう。",
                love: "積極的なアプローチが功を奏します。",
                work: "リーダーシップを発揮する機会です。",
                health: "エネルギーが高まっています。"
            },
            {
                name: "女教皇",
                meaning: "直感、知恵、内面の声",
                advice: "直感を信じて行動することが重要です。内なる声に耳を傾けてください。",
                love: "相手の気持ちを理解することが大切です。",
                work: "冷静な判断力が求められています。",
                health: "休息とリラックスを心がけて。"
            },
            {
                name: "女帝",
                meaning: "豊かさ、創造性、母性",
                advice: "創造的な活動や人を支援することで幸運が訪れます。",
                love: "愛情深い関係が築けます。",
                work: "チームワークが成功の鍵です。",
                health: "栄養バランスに気をつけて。"
            },
            {
                name: "皇帝",
                meaning: "権威、安定、責任感",
                advice: "責任感を持って物事に取り組むことで大きな成果が得られます。",
                love: "安定した関係を築けます。",
                work: "リーダーとしての資質が評価されます。",
                health: "規則正しい生活を心がけて。"
            }
        ]
    },



    // 星座占いデータ
    zodiac: {
        aries: { 
            name: "牡羊座", 
            element: "火", 
            period: "3/21-4/19",
            dailyAdvice: [
                "今日は新しいことに挑戦する絶好の日です。積極的な行動が幸運を呼びます。",
                "エネルギッシュな一日。リーダーシップを発揮して周囲を引っ張りましょう。",
                "直感を信じて行動することで、予想以上の成果が得られそうです。",
                "新しい出会いや機会が舞い込む日。アンテナを高く張っておきましょう。",
                "自分の意見をしっかりと伝えることで、理解者が増えそうです。",
                "体を動かすことで運気がアップ。スポーツやエクササイズがおすすめです。",
                "創造性が高まっている日。アイデアを形にしてみましょう。"
            ],
            luckyColors: ["赤", "オレンジ", "金", "白", "黄色", "ピンク", "紫"]
        },
        taurus: { 
            name: "牡牛座", 
            element: "地", 
            period: "4/20-5/20",
            dailyAdvice: [
                "じっくりと物事を進めることで良い結果が得られます。焦りは禁物です。",
                "美しいものに触れることで心が豊かになる日。アートや音楽を楽しんで。",
                "五感を大切にした一日を過ごしましょう。美味しいものを味わって。",
                "安定した環境で力を発揮できる日。いつものペースを大切に。",
                "丁寧な作業が評価される日。質の高い仕事を心がけましょう。",
                "自然と触れ合うことで心が癒される日。散歩や園芸がおすすめ。",
                "忍耐強く取り組むことで、大きな成果が期待できます。"
            ],
            luckyColors: ["緑", "ピンク", "茶色", "ベージュ", "青", "白", "黄色"]
        },
        gemini: { 
            name: "双子座", 
            element: "風", 
            period: "5/21-6/21",
            dailyAdvice: [
                "人との交流が幸運を呼び込みます。積極的にコミュニケーションを取りましょう。",
                "好奇心旺盛な一日。新しい情報や知識を積極的に取り入れて。",
                "軽やかな行動が吉。フットワークの軽さが成功のカギです。",
                "多方面での活動が充実する日。様々なことにチャレンジしてみましょう。",
                "会話上手が光る日。あなたの話術で場を盛り上げて。",
                "情報収集に適した日。SNSやニュースから有益な情報をキャッチ。",
                "変化を恐れずに新しい環境に飛び込んでみましょう。"
            ],
            luckyColors: ["黄色", "オレンジ", "青", "緑", "白", "銀", "紫"]
        },
        cancer: { 
            name: "蟹座", 
            element: "水", 
            period: "6/22-7/22",
            dailyAdvice: [
                "感情を大切にした行動が良い方向に導きます。直感を信じて。",
                "家族や親しい人との時間を大切にする日。絆が深まりそうです。",
                "思いやりの心が幸運を招く日。優しさが周囲に伝わります。",
                "過去の経験が今日の判断に役立ちそう。記憶を辿ってみて。",
                "居心地の良い空間で過ごすことで心が安らぐ日です。",
                "母性本能が光る日。困っている人を助けることで運気アップ。",
                "感受性が豊かになっている日。芸術や文学に触れてみましょう。"
            ],
            luckyColors: ["白", "銀", "青", "紫", "ピンク", "緑", "クリーム"]
        },
        leo: { 
            name: "獅子座", 
            element: "火", 
            period: "7/23-8/22",
            dailyAdvice: [
                "自分らしさを前面に出すことで注目を集められます。堂々と振る舞って。",
                "クリエイティブな活動が吉。あなたの才能を存分に発揮しましょう。",
                "リーダーシップが求められる日。積極的に前に出て行きましょう。",
                "華やかな場所や人との出会いが幸運をもたらします。",
                "自信を持って行動することで、周囲からの評価が高まります。",
                "表現力が光る日。プレゼンや発表に最適なタイミングです。",
                "楽しいことを優先する日。エンターテインメントを満喫して。"
            ],
            luckyColors: ["金", "オレンジ", "赤", "黄色", "紫", "白", "ピンク"]
        },
        virgo: { 
            name: "乙女座", 
            element: "地", 
            period: "8/23-9/22",
            dailyAdvice: [
                "細部への気配りが成功のポイントになります。丁寧な作業を心がけて。",
                "整理整頓が運気を向上させる日。身の回りを綺麗にしましょう。",
                "分析力が冴える日。データや情報を詳しく調べてみて。",
                "健康管理に意識を向ける日。食事や運動に気を配りましょう。",
                "完璧主義が良い結果をもたらす日。妥協せずに取り組んで。",
                "他人のサポートに徹することで、信頼関係が築けそうです。",
                "実用的な知識やスキルを身につけるのに適した日です。"
            ],
            luckyColors: ["紺", "グレー", "白", "緑", "茶色", "ベージュ", "青"]
        },
        libra: { 
            name: "天秤座", 
            element: "風", 
            period: "9/23-10/23",
            dailyAdvice: [
                "調和を重視した判断が良い結果をもたらします。バランス感覚を大切に。",
                "美的センスが光る日。ファッションやインテリアにこだわってみて。",
                "パートナーシップが重要な日。協力関係を築くことが成功のカギ。",
                "公平性を保つことで周囲からの信頼を得られそうです。",
                "社交性が発揮される日。パーティーや集まりに参加してみて。",
                "芸術的な活動が吉。美術館やコンサートに足を運んでみましょう。",
                "優雅な時間を過ごすことで心が豊かになる日です。"
            ],
            luckyColors: ["ピンク", "青", "緑", "白", "パステルカラー", "銀", "紫"]
        },
        scorpio: { 
            name: "蠍座", 
            element: "水", 
            period: "10/24-11/22",
            dailyAdvice: [
                "深く掘り下げることで真実が見えてきます。探究心を大切に。",
                "集中力が高まる日。一つのことに没頭してみましょう。",
                "秘密や隠されたものが明らかになる日。真相に迫ってみて。",
                "変革の時。古いものを手放して新しいスタートを切りましょう。",
                "直感力が冴える日。第六感を信じて行動してみて。",
                "深い絆を求める日。表面的な関係より真の友情を大切に。",
                "研究や調査に向いている日。興味のあることを徹底的に調べて。"
            ],
            luckyColors: ["黒", "赤", "紫", "深緑", "茶色", "ワインレッド", "濃紺"]
        },
        sagittarius: { 
            name: "射手座", 
            element: "火", 
            period: "11/23-12/21",
            dailyAdvice: [
                "広い視野を持って物事を捉えることが大切です。視点を変えてみて。",
                "冒険心が幸運を呼ぶ日。新しい場所や体験にチャレンジしてみましょう。",
                "学習意欲が高まる日。新しい知識や技能を身につけてみて。",
                "自由な発想が評価される日。既成概念にとらわれずに考えて。",
                "海外や遠方との縁が深まる日。異文化交流を楽しんでみて。",
                "哲学的な思考が深まる日。人生について考えてみましょう。",
                "楽観的な姿勢が周囲に良い影響を与える日です。"
            ],
            luckyColors: ["青", "紫", "オレンジ", "黄色", "緑", "白", "ターコイズ"]
        },
        capricorn: { 
            name: "山羊座", 
            element: "地", 
            period: "12/22-1/19",
            dailyAdvice: [
                "着実な努力が大きな成果につながります。継続は力なりです。",
                "責任感が評価される日。任されたことは確実にこなしましょう。",
                "長期的な計画を立てるのに適した日。将来のビジョンを描いて。",
                "伝統や格式を重んじることで信頼を得られそうです。",
                "実績と経験が物を言う日。これまでの努力が報われそう。",
                "組織やグループでの活動が充実する日。チームワークを大切に。",
                "現実的な判断が成功につながる日。夢より現実を重視して。"
            ],
            luckyColors: ["黒", "グレー", "茶色", "濃紺", "緑", "白", "銀"]
        },
        aquarius: { 
            name: "水瓶座", 
            element: "風", 
            period: "1/20-2/18",
            dailyAdvice: [
                "独自のアイデアが評価される時です。斬新な提案をしてみましょう。",
                "友情が重要な日。仲間との絆を深めることで新しい可能性が開けます。",
                "革新的な技術や方法に注目する日。最新情報をキャッチして。",
                "個性を大切にする日。人と違うことを恐れずに自分らしく。",
                "社会貢献への意識が高まる日。ボランティア活動に参加してみて。",
                "未来志向の思考が吉。先を見据えた計画を立ててみましょう。",
                "ネットワークが広がる日。新しい人脈を築いてみて。"
            ],
            luckyColors: ["青", "水色", "銀", "白", "紫", "緑", "黄色"]
        },
        pisces: { 
            name: "魚座", 
            element: "水", 
            period: "2/19-3/20",
            dailyAdvice: [
                "直感と想像力を信じて行動しましょう。感性が冴える日です。",
                "芸術的な活動が吉。クリエイティブな時間を過ごしてみて。",
                "共感力が高まる日。他人の気持ちを理解することで絆が深まります。",
                "スピリチュアルなことに意識を向ける日。瞑想や自然との対話を。",
                "夢や理想を大切にする日。現実的すぎる考えは一旦置いて。",
                "感受性が豊かになる日。音楽や詩に心を委ねてみましょう。",
                "奉仕の精神が幸運を呼ぶ日。困っている人を助けることで運気アップ。"
            ],
            luckyColors: ["青", "緑", "紫", "白", "ピンク", "水色", "シルバー"]
        }
    },

    // 数秘術データ
    numerology: {
        1: { 
            personality: "リーダーシップがあり、独立心が強い",
            strength: "開拓精神、決断力、創造性",
            weakness: "自己中心的になりがち、せっかち",
            advice: "自分の能力を信じて、新しい分野に挑戦しましょう。"
        },
        2: {
            personality: "協調性があり、人をサポートすることが得意",
            strength: "共感力、協力性、平和主義",
            weakness: "優柔不断、依存的",
            advice: "チームワークを活かした仕事で力を発揮できます。"
        },
        3: {
            personality: "創造性に富み、表現力が豊か",
            strength: "芸術的才能、コミュニケーション力、楽観性",
            weakness: "集中力不足、浅く広く",
            advice: "芸術や表現の分野で才能を開花させましょう。"
        },
        4: {
            personality: "堅実で責任感が強く、組織力がある",
            strength: "安定性、実用性、忍耐力",
            weakness: "頑固、変化を嫌う",
            advice: "着実な努力を続けることで大きな成果を得られます。"
        },
        5: {
            personality: "自由を愛し、変化と冒険を求める",
            strength: "適応力、好奇心、多才",
            weakness: "飽きっぽい、落ち着きがない",
            advice: "多様な経験を積むことで視野が広がります。"
        },
        6: {
            personality: "愛情深く、責任感があり、奉仕精神に富む",
            strength: "思いやり、責任感、調和性",
            weakness: "お節介、完璧主義",
            advice: "人を支援する仕事で力を発揮できます。"
        },
        7: {
            personality: "知的好奇心が強く、深く物事を追求する",
            strength: "分析力、洞察力、独立性",
            weakness: "孤独になりがち、批判的",
            advice: "研究や分析の分野で才能を活かしましょう。"
        },
        8: {
            personality: "現実的で野心があり、成功を追求する",
            strength: "経営能力、実行力、現実性",
            weakness: "物質主義、権力志向",
            advice: "ビジネスや経営の分野で成功できます。"
        },
        9: {
            personality: "博愛主義で理想が高く、人類愛に満ちている",
            strength: "寛容性、理想主義、人道性",
            weakness: "非現実的、感情的",
            advice: "社会貢献や人道的な活動で充実感を得られます。"
        }
    }
};

// モバイルナビゲーション
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// スムーススクロール
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 占い診断開始
function startFortune(type) {
    let formHTML = '';
    
    switch(type) {
        case 'tarot':
            formHTML = `
                <div class="fortune-form">
                    <h3><i class="fas fa-tarot"></i> タロット占い</h3>
                    <p>質問を心の中で思い浮かべながら、カードを選んでください。</p>
                    <div class="form-group">
                        <label>占いたい内容を選択してください:</label>
                        <select id="tarotCategory" required>
                            <option value="">選択してください</option>
                            <option value="love">恋愛運</option>
                            <option value="work">仕事運</option>
                            <option value="health">健康運</option>
                            <option value="general">総合運</option>
                        </select>
                    </div>
                    <div class="card-selection">
                        <p>以下から1枚のカードを選んでください:</p>
                        <div class="tarot-cards">
                            ${Array.from({length: 5}, (_, i) => 
                                `<div class="tarot-card" onclick="selectTarotCard(${i})">
                                    <div class="card-back">
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                    <button onclick="performTarotReading()" class="btn btn-primary" style="display:none;" id="tarotButton">占い結果を見る</button>
                </div>
            `;
            break;
            
        case 'palm':
            formHTML = `
                <div class="fortune-form">
                    <h3><i class="fas fa-hand-paper"></i> 手相診断</h3>
                    <p>以下の情報を入力してください:</p>
                    <div class="form-group">
                        <label for="birthDate">生年月日:</label>
                        <input type="date" id="birthDate" required>
                    </div>
                    <div class="form-group">
                        <label for="gender">性別:</label>
                        <select id="gender" required>
                            <option value="">選択してください</option>
                            <option value="male">男性</option>
                            <option value="female">女性</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="dominantHand">利き手:</label>
                        <select id="dominantHand" required>
                            <option value="">選択してください</option>
                            <option value="right">右手</option>
                            <option value="left">左手</option>
                        </select>
                    </div>
                    <button onclick="performPalmReading()" class="btn btn-primary">手相診断を開始</button>
                </div>
            `;
            break;
            
        case 'astrology':
            formHTML = `
                <div class="fortune-form">
                    <h3><i class="fas fa-moon"></i> 星座占い</h3>
                    <p>あなたの星座を選択してください:</p>
                    <div class="zodiac-selection">
                        ${Object.entries(fortuneData.zodiac).map(([key, value]) => 
                            `<div class="zodiac-option" onclick="selectZodiac('${key}')">
                                <strong>${value.name}</strong>
                            </div>`
                        ).join('')}
                    </div>
                    <button onclick="performAstrologyReading()" class="btn btn-primary" style="display:none;" id="astrologyButton">星座占いを開始</button>
                </div>
            `;
            break;
            
        case 'numerology':
            formHTML = `
                <div class="fortune-form">
                    <h3><i class="fas fa-calculator"></i> 数秘術診断</h3>
                    <p>生年月日から運命数を算出して診断します:</p>
                    <div class="form-group">
                        <label for="numerologyBirth">生年月日:</label>
                        <input type="date" id="numerologyBirth" required>
                    </div>
                    <div class="form-group">
                        <label for="fullName">お名前（ローマ字）:</label>
                        <input type="text" id="fullName" placeholder="例: Taro Yamada" required>
                    </div>
                    <button onclick="performNumerologyReading()" class="btn btn-primary">数秘術診断を開始</button>
                </div>
            `;
            break;
    }
    
    document.getElementById('fortuneResult').innerHTML = formHTML;
    document.getElementById('fortuneModal').style.display = 'block';
}

// タロットカード選択
let selectedCard = null;
let selectedCategory = null;

function selectTarotCard(cardIndex) {
    selectedCard = cardIndex;
    document.querySelectorAll('.tarot-card').forEach((card, index) => {
        card.classList.remove('selected');
        if (index === cardIndex) {
            card.classList.add('selected');
        }
    });
    
    const category = document.getElementById('tarotCategory').value;
    if (category) {
        selectedCategory = category;
        document.getElementById('tarotButton').style.display = 'block';
    }
}

// タロット占い実行
function performTarotReading() {
    if (selectedCard === null || !selectedCategory) {
        alert('カードと占いたい内容を選択してください。');
        return;
    }
    
    const card = fortuneData.tarot.cards[selectedCard];
    const resultHTML = `
        <div class="fortune-result">
            <h3><i class="fas fa-tarot"></i> タロット占い結果</h3>
            <div class="card-reveal">
                <div class="revealed-card">
                    <h4>『${card.name}』</h4>
                    <p class="card-meaning">${card.meaning}</p>
                </div>
            </div>
            <div class="reading-result">
                <h4>占い結果:</h4>
                <p>${card.advice}</p>
                <div class="detailed-reading">
                    ${selectedCategory === 'love' ? `<p><strong>恋愛運:</strong> ${card.love}</p>` : ''}
                    ${selectedCategory === 'work' ? `<p><strong>仕事運:</strong> ${card.work}</p>` : ''}
                    ${selectedCategory === 'health' ? `<p><strong>健康運:</strong> ${card.health}</p>` : ''}
                </div>
            </div>
            <div class="fortune-actions">
                <button onclick="startFortune('tarot')" class="btn btn-secondary">もう一度占う</button>
                <button onclick="closeFortune()" class="btn btn-primary">結果を保存</button>
            </div>
        </div>
    `;
    
    document.getElementById('fortuneResult').innerHTML = resultHTML;
}

// 手相診断実行
function performPalmReading() {
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.getElementById('gender').value;
    const dominantHand = document.getElementById('dominantHand').value;
    
    if (!birthDate || !gender || !dominantHand) {
        alert('すべての項目を入力してください。');
        return;
    }
    
    // ランダムに手相の特徴を選択
    const palmLine = fortuneData.palm.lines[Math.floor(Math.random() * fortuneData.palm.lines.length)];
    
    const resultHTML = `
        <div class="fortune-result">
            <h3><i class="fas fa-hand-paper"></i> 手相診断結果</h3>
            <div class="palm-analysis">
                <h4>あなたの手相の特徴:</h4>
                <div class="palm-feature">
                    <h5>${palmLine.name}</h5>
                    <p class="feature-meaning">${palmLine.meaning}</p>
                </div>
                <div class="personality-analysis">
                    <h4>性格分析:</h4>
                    <p>${palmLine.characteristic}</p>
                </div>
                <div class="palm-advice">
                    <h4>アドバイス:</h4>
                    <p>${palmLine.advice}</p>
                </div>
            </div>
            <div class="fortune-actions">
                <button onclick="startFortune('palm')" class="btn btn-secondary">もう一度診断する</button>
                <button onclick="closeFortune()" class="btn btn-primary">結果を保存</button>
            </div>
        </div>
    `;
    
    document.getElementById('fortuneResult').innerHTML = resultHTML;
}

// 星座選択
let selectedZodiacSign = null;

function selectZodiac(sign) {
    selectedZodiacSign = sign;
    document.querySelectorAll('.zodiac-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.target.closest('.zodiac-option').classList.add('selected');
    document.getElementById('astrologyButton').style.display = 'block';
}

// 日付ベースのインデックス取得関数
function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// 日付ベースのアドバイス選択
function getDailyAdvice(zodiacSign) {
    const zodiacInfo = fortuneData.zodiac[zodiacSign];
    const dayIndex = getDayOfYear() % zodiacInfo.dailyAdvice.length;
    return zodiacInfo.dailyAdvice[dayIndex];
}

// 日付ベースのラッキーカラー選択
function getDailyLuckyColor(zodiacSign) {
    const zodiacInfo = fortuneData.zodiac[zodiacSign];
    const dayIndex = getDayOfYear() % zodiacInfo.luckyColors.length;
    return zodiacInfo.luckyColors[dayIndex];
}

// 日付ベースのラッキーナンバー生成
function getDailyLuckyNumber() {
    const dayOfYear = getDayOfYear();
    // 日付に基づいて1-9の数字を生成
    return (dayOfYear % 9) + 1;
}

// 日付ベースの運勢星評価生成
function getDailyStarRating(type, zodiacSign) {
    const dayOfYear = getDayOfYear();
    const zodiacIndex = Object.keys(fortuneData.zodiac).indexOf(zodiacSign);
    
    // 星座と日付、運勢タイプに基づいてスコアを生成
    let seed = dayOfYear + zodiacIndex;
    if (type === 'love') seed += 1;
    else if (type === 'work') seed += 2;
    else if (type === 'money') seed += 3;
    
    const stars = (seed % 5) + 1; // 1-5の星数
    return '⭐'.repeat(stars);
}

// 星座占い実行
function performAstrologyReading() {
    if (!selectedZodiacSign) {
        alert('星座を選択してください。');
        return;
    }
    
    const zodiacInfo = fortuneData.zodiac[selectedZodiacSign];
    const today = new Date().toLocaleDateString('ja-JP');
    const dailyAdvice = getDailyAdvice(selectedZodiacSign);
    const luckyColor = getDailyLuckyColor(selectedZodiacSign);
    const luckyNumber = getDailyLuckyNumber();
    
    const resultHTML = `
        <div class="fortune-result">
            <h3><i class="fas fa-moon"></i> 星座占い結果</h3>
            <div class="zodiac-info">
                <h4>${zodiacInfo.name} (${today})</h4>
                <p><strong>期間:</strong> ${zodiacInfo.period}</p>
                <p><strong>エレメント:</strong> ${zodiacInfo.element}の星座</p>
            </div>
            <div class="daily-fortune">
                <h4>今日のアドバイス:</h4>
                <p>${dailyAdvice}</p>
                <div class="lucky-items">
                    <div class="luck-item">
                        <strong>ラッキーカラー:</strong> <span style="color: #eb3474;">${luckyColor}</span>
                    </div>
                    <div class="luck-item">
                        <strong>ラッキーナンバー:</strong> ${luckyNumber}
                    </div>
                </div>
                <div class="fortune-details">
                    <div class="fortune-item">
                        <strong>総合運:</strong> ${getDailyStarRating('general', selectedZodiacSign)}
                    </div>
                    <div class="fortune-item">
                        <strong>恋愛運:</strong> ${getDailyStarRating('love', selectedZodiacSign)}
                    </div>
                    <div class="fortune-item">
                        <strong>仕事運:</strong> ${getDailyStarRating('work', selectedZodiacSign)}
                    </div>
                    <div class="fortune-item">
                        <strong>金運:</strong> ${getDailyStarRating('money', selectedZodiacSign)}
                    </div>
                </div>
            </div>
            <div class="fortune-actions">
                <button onclick="startFortune('astrology')" class="btn btn-secondary">他の星座も見る</button>
                <button onclick="closeFortune()" class="btn btn-primary">結果を保存</button>
            </div>
        </div>
    `;
    
    document.getElementById('fortuneResult').innerHTML = resultHTML;
}

// 数秘術診断実行
function performNumerologyReading() {
    const birthDate = document.getElementById('numerologyBirth').value;
    const fullName = document.getElementById('fullName').value;
    
    if (!birthDate || !fullName) {
        alert('すべての項目を入力してください。');
        return;
    }
    
    // 運命数の計算
    const birthNumbers = birthDate.replace(/-/g, '').split('').map(Number);
    let sum = birthNumbers.reduce((a, b) => a + b, 0);
    while (sum > 9) {
        sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    
    const destinyNumber = sum;
    const numerologyInfo = fortuneData.numerology[destinyNumber];
    
    const resultHTML = `
        <div class="fortune-result">
            <h3><i class="fas fa-calculator"></i> 数秘術診断結果</h3>
            <div class="numerology-info">
                <h4>あなたの運命数: ${destinyNumber}</h4>
                <div class="personality-description">
                    <h5>基本性格:</h5>
                    <p>${numerologyInfo.personality}</p>
                </div>
                <div class="strengths-weaknesses">
                    <div class="strengths">
                        <h5>長所:</h5>
                        <p>${numerologyInfo.strength}</p>
                    </div>
                    <div class="weaknesses">
                        <h5>注意点:</h5>
                        <p>${numerologyInfo.weakness}</p>
                    </div>
                </div>
                <div class="life-advice">
                    <h5>人生のアドバイス:</h5>
                    <p>${numerologyInfo.advice}</p>
                </div>
            </div>
            <div class="fortune-actions">
                <button onclick="startFortune('numerology')" class="btn btn-secondary">もう一度診断する</button>
                <button onclick="closeFortune()" class="btn btn-primary">結果を保存</button>
            </div>
        </div>
    `;
    
    document.getElementById('fortuneResult').innerHTML = resultHTML;
}

// 今日の運勢クイック表示
function showQuickFortune() {
    const fortunes = [
        "今日は素晴らしい一日になりそうです。新しい出会いが期待できます。",
        "直感を信じて行動することで、良い結果が得られるでしょう。",
        "周囲の人との協力が成功のカギとなります。",
        "創造性を活かした活動に取り組むと良いでしょう。",
        "今日は新しいことにチャレンジする絶好の日です。",
        "感謝の気持ちを忘れずに過ごすことで幸運が訪れます。"
    ];
    
    // 日付ベースで一貫した運勢を選択
    const dayIndex = getDayOfYear() % fortunes.length;
    const todaysFortune = fortunes[dayIndex];
    const today = new Date().toLocaleDateString('ja-JP');
    const luckyNumber = getDailyLuckyNumber();
    
    // 日付ベースのラッキーカラー（全体用）
    const globalColors = ["ピンク", "青", "緑", "黄色", "紫", "オレンジ", "白"];
    const colorIndex = getDayOfYear() % globalColors.length;
    const luckyColor = globalColors[colorIndex];
    
    const resultHTML = `
        <div class="fortune-result">
            <h3><i class="fas fa-crystal-ball"></i> 今日のあなたの運勢</h3>
            <div class="quick-fortune">
                <p class="fortune-date">${today}</p>
                <div class="fortune-message">
                    <p>${todaysFortune}</p>
                </div>
                <div class="lucky-items">
                    <p><strong>ラッキーカラー:</strong> <span style="color: #eb3474;">${luckyColor}</span></p>
                    <p><strong>ラッキーナンバー:</strong> ${luckyNumber}</p>
                </div>
            </div>
            <div class="fortune-actions">
                <button onclick="startFortune('tarot')" class="btn btn-secondary">詳しく占う</button>
                <button onclick="closeFortune()" class="btn btn-primary">閉じる</button>
            </div>
        </div>
    `;
    
    document.getElementById('fortuneResult').innerHTML = resultHTML;
    document.getElementById('fortuneModal').style.display = 'block';
}

// 星座別今日の運勢
function showZodiacFortune(sign) {
    const zodiacInfo = fortuneData.zodiac[sign];
    const today = new Date().toLocaleDateString('ja-JP');
    const dailyAdvice = getDailyAdvice(sign);
    const luckyColor = getDailyLuckyColor(sign);
    const luckyNumber = getDailyLuckyNumber();
    
    const resultHTML = `
        <div class="fortune-result">
            <h3><i class="fas fa-star"></i> ${zodiacInfo.name}の今日の運勢</h3>
            <div class="zodiac-daily">
                <p class="fortune-date">${today}</p>
                <div class="zodiac-advice">
                    <p>${dailyAdvice}</p>
                </div>
                <div class="zodiac-details">
                    <p><strong>期間:</strong> ${zodiacInfo.period}</p>
                    <p><strong>エレメント:</strong> ${zodiacInfo.element}の星座</p>
                </div>
                <div class="lucky-items">
                    <p><strong>ラッキーカラー:</strong> <span style="color: #eb3474;">${luckyColor}</span></p>
                    <p><strong>ラッキーナンバー:</strong> ${luckyNumber}</p>
                </div>
            </div>
            <div class="fortune-actions">
                <button onclick="startFortune('astrology')" class="btn btn-secondary">詳しい星座占い</button>
                <button onclick="closeFortune()" class="btn btn-primary">閉じる</button>
            </div>
        </div>
    `;
    
    document.getElementById('fortuneResult').innerHTML = resultHTML;
    document.getElementById('fortuneModal').style.display = 'block';
}

// モーダルを閉じる
function closeFortune() {
    document.getElementById('fortuneModal').style.display = 'none';
    selectedCard = null;
    selectedCategory = null;
    selectedZodiacSign = null;
}

// モーダル外クリックで閉じる
window.onclick = function(event) {
    const modal = document.getElementById('fortuneModal');
    if (event.target === modal) {
        closeFortune();
    }
}

// フォーム送信処理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const category = document.getElementById('category').value;
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !category || !message) {
                alert('すべての項目を入力してください。');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('正しいメールアドレスを入力してください。');
                return;
            }
            
            alert('お問い合わせありがとうございます。\n内容を確認の上、3営業日以内にご返信いたします。');
            contactForm.reset();
        });
    }
});

// メールアドレス検証
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ヘッダースクロール効果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
});

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mystic Fortune サイトが読み込まれました');
});