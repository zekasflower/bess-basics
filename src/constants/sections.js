// ICONS
import youtube_icon from '@/assets/icons/youtube.svg'
import twitter_icon from '@/assets/icons/twitter.svg'
import w3_icon from '@/assets/icons/w3.svg'
import drive_icon from '@/assets/icons/drive.svg'
import github_icon from '@/assets/icons/github.svg'

export const NO_LINKS_SECTIONS = [
  {
    id: 1001,
    title: 'البداية',
    html_inject: `
      <p>كل ما تسأل حد "أبدأ برمجة ازاي؟"</p>
      <p>هتلاقيه بيقولك "اتعلم الـ basics الأول". </p>
      <p>طب إيه هي الـ basics دي؟</p>
      <p>في الثريد ده هنبسط الموضوع ده. </p>
      <p>و هحطلك كل المصادر و اللينكات اللي هتحتاجها،</p>
      <p><br/></p>
      <p>-الثريد ده معمول لأي حد عاوز يبدأ برمجة، سواء كنت طالب جديد أو حد من مجال تاني وعاوز يدخل عالم البرمجة.</p>
    `
  },
  {
    id: 1002,
    title: 'القصة',
    html_inject: `
      <p>
      بقالي 3 سنين بكتب في الثريد ده و بطور فيه و بنزله في نفس المعاد ده من كل سنه بحيث يكون صدقه جاريه للعلم للي جاين من بعدي و اللي جالهم الكليه جديد و ميعرفوش عنها حاجه "كنت كده" بحيث اختصر عليهم طريق انا خوضته" صدقة العلم تعليمه" سمي الله و برجلك اليمين هيكون ثريد دسم
      </p>
    `
  },
  {
    id: 1003,
    title: 'أساسيات',
    html_inject: `
      <p>بص يا سيدي، الـ basics في البرمجة زي الطفل اللي بيتعلم الكلام.</p>
      <p>الأول بيتعلم الحروف A B C، وبعدين بيكوّن كلمات، وبعدين جمل.</p>
      <p>إنت ك مهندس برمجيات هتعمل نفس الحكاية،</p>
      <p>هتتعلم الأساسيات وبعدين تبني بيهم مشاريع "projects".</p>
      <p>يلا نشوف الـ basics دي إيه بالظبط:</p>
    `
  },
  {
    id: 1004,
    title: 'الأبجدية',
    html_inject: `
      <p>أولاً: Programming Fundamental</p>
      <p>دي زي الأبجدية بتاعتك بس في البرمجة.</p>
      <p> هتتعلم الـ variables (المتغيرات)،</p>
      <p>والـ data types (أنواع البيانات)،</p>
      <p> والـ if case والـ switch case ،والـ loops، والـ array (المصفوفات). </p>
      <p>هتعرف تكتب code، بس هيبقى زي الشخبطة شوية،</p>
      <p>أو زي ما بنقول "spaghetti code".</p>
    `
  },
  {
    id: 1005,
    title: 'اسباجيتي',
    html_inject: `
      <p>ماشي، خليني أشرحلك موضوع الـ spaghetti code ده:</p>
      <p>بص يا سيدي، لما نقول spaghetti code، تخيل معايا طبق مكرونة إسباجتي ملخبط.</p>
      <p>عارف المكرونة لما تبقى متلخبطة في بعضها ومش عارف أول خيط فين وآخره فين؟</p>
      <p>بالظبط كده الـ spaghetti code.</p>
      <p>في البرمجة، لما الكود بتاعك يبقى زي الإسباجتي، يعني:</p>
      <p>ملخبط وملغبط</p>
      <p>صعب تفهم مين بيعمل إيه</p>
      <p>لو جيت تغير حاجة، مش عارف هتأثر على إيه تاني</p>
    `
  },
  {
    id: 1006,
    title: 'اسباجيتي  ٢',
    html_inject: `
      <p>تخيل كده إنك بتحاول تطلع خيط واحد من طبق الإسباجتي من غير ما تلخبط الباقي.</p>
      <p>صعب صح؟ كده بالظبط لما تيجي تعدل في spaghetti code.</p>
      <p>فـ لما نقول "الكود بتاعك spaghetti"، قصدنا إنه ملخبط ومتشابك ومش منظم.</p>
      <p>صعب تفهمه أو تعدل فيه أو تضيف عليه.</p>
      <p>عشان كده بنتعلم طرق نكتب كود منظم، زي الـ OOP.</p>
      <p>عشان بدل ما يبقى عندك طبق إسباجتي، يبقى عندك وجبة منظمة، كل حاجة في طبقها.</p>
      <p>فاهمني؟ كده الـ spaghetti code مش هيعملك صداع تاني!</p>
    `
  },
  {
    id: 1007,
    title: 'الحل السحري',
    html_inject: `
      <p>ثانياً: OOP (Object-Oriented Programming)</p>
      <p>بص يا معلم، الـ OOP ده الحل السحري للإسباجتي كود بتاعنا.</p>
      <p>بدل ما يبقى عندك طبق مكرونة ملخبط،</p>
      <p>هتتعلم تنظم الكود بتاعك زي مطعم محترم، كل حاجة في طبقها.</p>
      <p>هتتعرف على 4 مبادئ أساسية:</p>
    `
  },
  {
    id: 1008,
    title: 'الحل السحري  ٢',
    html_inject: `
      <p>Encapsulation</p>
      <p>ده زي ما تحط كل مكونات الطبق في علبة محكمة.</p>
      <p>مش أي حد يقدر يعك في المكونات، بس يقدر ياكل الطبق.</p>
      <p><br /></p>
      <p>Inheritance</p>
      <p>تخيل إنك عامل وصفة بيتزا، وعايز تعمل بيتزا بالفراخ.</p>
      <p>مش هتبدأ من الصفر، هتاخد الوصفة الأساسية وتضيف عليها.</p>
      <p>كده بتورث الخصائص الأساسية وتضيف الجديد.</p>
    `
  },
  {
    id: 1009,
    title: 'الحل السحري  ٣',
    html_inject: `
      <p>Polymorphism</p>
      <p>ده زي ما تقول "اطبخ" لطباخين مختلفين.</p>
      <p>كل واحد هيطبخ بطريقته، بس كلهم بيطبخوا.</p>
      <p>في البرمجة، ده بيخلي الكود مرن.</p>
      <p><br /></p>
      <p>Abstraction</p>
      <p>ده زي ما تطلب أكلة من المطعم.</p>
      <p>أنت مش محتاج تعرف كل خطوة في المطبخ، بس عايز النتيجة النهائية.</p>
      <p>بتخفي التفاصيل المعقدة وتظهر بس اللي محتاجينه.</p>
    `
  },
  {
    id: 1010,
    title: 'الحل السحري  ٤',
    html_inject: `
      <p>الـ OOP بيخليك تفكر في الكود زي الأشياء الحقيقية،</p>
      <p>كل حاجة ليها خصائصها وطريقة عملها.</p>
      <p>بدل ما يبقى عندك شوربة كود، هيبقى عندك مطعم منظم،</p>
      <p>كل حاجة في مكانها وسهل تضيف أصناف جديدة أو تعدل في الموجود.</p>
      <p>كده يا باشا، الـ OOP هيخلصك من الإسباجتي كود.</p>
      <p>زي ما بيقولوا، نظام يريح دماغك!</p>
    `
  },
  {
    id: 1011,
    title: 'النظام',
    html_inject: `
      <p>ثالثاً: Data Structure</p>
      <p>بص يا سيدي، الـ Data Structure دي زي ما تكون بتنظم مكتبة كبيرة.</p>
      <p>مش هترمي الكتب كلها على بعض، صح؟ لأ طبعاً،</p>
      <p>هتنظمها بطريقة تخليك تلاقي أي كتاب بسرعة.</p>
      <p>في البرمجة، بنستخدم Data Structures عشان ننظم ونخزن البيانات بطريقة ذكية.</p>
      <p>فيه نوعين أساسيين:</p>
    `
  },
  {
    id: 1012,
    title: 'خط مستقيم',
    html_inject: `
      <p>Linear Data Structures</p>
      <p>دي زي ما ترص الكتب جنب بعض على رف واحد</p>
      <p>كل عنصر وراء التاني على خط مستقيم.</p>
      <p>من أشهر أنواعها:</p>
      <p>Array: ده زي رف ثابت، عارف من الأول هيشيل كام كتاب بالظبط.</p>
      <p>Stack: ده زي ما ترص الكتب فوق بعض. آخر حاجة حطيتها هي أول حاجة هتاخدها.</p>
      <p>Queue: ده زي الطابور في الكشك.</p>
    `
  },
  {
    id: 1013,
    title: 'غير مستقيم',
    html_inject: `
      <p>Non-Linear Data Structures</p>
      <p>دي زي ما تنظم الكتب بطريقة أكثر تعقيداً. مش مجرد خط مستقيم</p>
      <p>من أشهرها</p>
      <p>Tree: ده زي شجرة العيلة. فيه جد وتحته الأب والأم، وتحتهم العيال وهكذا.</p>
      <p>Graph: ده زي خريطة المترو. كل محطة متوصلة بكذا محطة تانية.</p>
      <p>Hash Table: دي زي الفهرس بتاع الكتاب.</p>
    `
  },
  {
    id: 1014,
    title: 'مميزات',
    html_inject: `
      <p>ليه بنستخدم الحاجات دي؟</p>
      <p>- السرعة: تخيل إنك عايز تدور على كتاب في مكتبة منظمة vs مكتبة مكومة على بعضها.</p>
      <p>أكيد المنظمة أسرع.</p>
      <p>- الكفاءة: بتوفر في استهلاك الذاكرة والوقت.</p>
      <p>- سهولة التعامل: بتخلي إضافة، حذف، أو تعديل البيانات عملية سهلة وسريعة.</p>
    `
  },
  {
    id: 1015,
    title: 'مثال عملي',
    html_inject: `
      <p>مثال عملي:</p>
      <p>لو بتعمل برنامج زي Facebook،</p>
      <p>هتستخدم Graph عشان تمثل العلاقات بين الناس.</p>
      <p>لو بتعمل نظام حجز في مطعم، ممكن تستخدم Queue عشان تنظم الطلبات بترتيب وصولها.</p>
      <p><br /></p>
      <p>فاهمني؟ الـ Data Structures دي هي اللي بتخلي البرامج الكبيرة تشتغل بسرعة وكفاءة.</p>
      <p>من غيرها، كل حاجة هتبقى بطيئة وملخبطة زي الإسباجتي كود بتاعنا</p>
    `
  },
  {
    id: 1016,
    title: 'الخوارزميات',
    html_inject: `
      <p>رابعاً: الخوارزميات (Algorithms)</p>
      <p>بص يا معلم، الخوارزمية دي زي وصفة الأكل بالظبط.</p>
      <p>لو عايز تعمل كشري، مش هتحدف المكرونة والعدس في الحلة وخلاص.</p>
      <p>لأ، فيه خطوات لازم تمشي عليها:</p>
      <p>- اسلق المكرونة</p>
      <p>- اغلي العدس</p>
      <p>- حمر البصل</p>
      <p>- خلط الكل مع بعض</p>
      <p>- حط الصلصة والدقة فوق</p>
      <p>كده بقى عندك خوارزمية عمل الكشري.</p>
    `
  },
  {
    id: 1017,
    title: 'أهميتها',
    html_inject: `
      <p>في البرمجة، بنعمل نفس الحكاية.</p>
      <p>بنحط خطوات واضحة لحل أي مشكله</p>
      <p>طب ليه الalgorithms مهمة؟</p>
      <p>بتخليك تفكر منطقي وتحل المشاكل بطريقة منظمة</p>
      <p>بتساعدك تعمل برامج سريعة وشغالة كويس</p>
      <p>لما تيجي تشتغل في شركة كبيرة، هيسألوك عنها في الإنترفيو</p>
    `
  },
  {
    id: 1018,
    title: 'الترابط',
    html_inject: `
      <p>ربطها باللي فات:</p>
      <p>الـ variables والـ loops اللي اتكلمنا عنهم في الـ basics،</p>
      <p>هتستخدمهم كتير في الخوارزميات</p>
      <p>في الـ OOP، ممكن تعمل خوارزمية جوه الـ class بتاعك</p>
      <p>الخوارزميات بتشتغل على الـ Data Structures اللي اتكلمنا عنها</p>
    `
  },
  {
    id: 1019,
    title: 'قواعد البيانات',
    html_inject: `
      <p>خامساً: قواعد البيانات (Databases)</p>
      <p>بص يا سيدي، قواعد البيانات دي زي السوبر ماركت الضخم بتاعك.</p>
      <p>بتخزن فيها كل حاجة بطريقة منظمة عشان تلاقيها بسرعة.</p>
    `
  },
  {
    id: 1020,
    title: 'العلائقية',
    html_inject: `
      <p>عندنا نوعين رئيسيين:</p>
      <p>1-قواعد البيانات العلائقية (Relational Databases)</p>
      <p>دي زي ما تكون بتنظم السوبر ماركت بتاعك في أرفف وممرات:</p>
      <p><br /></p>
      <p>كل حاجة ليها مكان محدد</p>
      <p>الحاجات مرتبطة ببعض (زي الشامبو مع البلسم)</p>
      <p>بتستخدم لغة اسمها SQL عشان تجيب البيانات</p>
      <p>أمثلة: MySQL, PostgreSQL, Oracle</p>
      <p><br /></p>
      <p>مميزاتها:</p>
      <p>منظمة جداً وسهل تفهمها</p>
      <p>كويسة للبيانات اللي ليها علاقات كتير مع بعض</p>
      <p>ممتازة للتطبيقات المالية والبنوك</p>
    `
  },
  {
    id: 1021,
    title: 'غير العلائقية',
    html_inject: `
      <p>2-قواعد البيانات الغير علائقية (NoSQL Databases):</p>
      <p>دي زي ما تكون بتخزن الحاجات في صناديق مختلفة الأحجام:</p>
      <p><br /></p>
      <p>مرنة أكتر في طريقة التخزين</p>
      <p>مش لازم كل حاجة تبقى ليها نفس الشكل</p>
      <p>بتتعامل مع البيانات بطرق مختلفة حسب نوعها</p>
      <p>أمثلة: MongoDB, Cassandra, Redis</p>
      <p><br /></p>
      <p>مميزاتها:</p>
      <p>سريعة جداً في التعامل مع كميات بيانات ضخمة</p>
      <p>مرنة وسهل تغير شكل البيانات فيها</p>
      <p>كويسة للتطبيقات اللي بتتعامل مع بيانات متغيرة كتير زي مواقع التواصل الاجتماعي</p>
    `
  },
  {
    id: 1022,
    title: 'على حسب!',
    html_inject: `
      <p>طب نستخدم إيه و امتي؟</p>
      <p>الاجابه علي حسب بس كل حاله وليها حاجه بس اشهر الحالات</p>
      <p>لو شغال على تطبيق بنكي أو نظام محاسبة، يبقى الـ Relational أحسن</p>
      <p>لو بتعمل موقع زي Facebook أو تطبيق بيتعامل مع بيانات كتير ومتغيرة، الـ NoSQL هتريحك أكتر</p>
    `
  },
  {
    id: 1023,
    title: 'ملاحظة',
    html_inject: `
      <p>ملاحظة ممكن تفيدك :</p>
      <p>كل واحد ليه استخداماته، وفي الشغل غالبا هتلاقي نفسك محتاج تفهم الاتنين.</p>
      <p>ابدأ بالـ Relational عشان تفهم الأساسيات كويس،</p>
      <p>وبعدين ابقي اتعلم الـ NoSQL لو حابب مع الوقت وانت بتتعلم التكنولوجي بقا مش في الاساسيات في الاساسيات ركز علي لـ Relational ال هي SQL</p>
    `
  },
  {
    id: 1024,
    title: 'الشبكات  ١',
    html_inject: `
      <p>سادساً: الشبكات Networking</p>
      <p>الـ Networking ده زي شبكة المواصلات في البلد.</p>
      <p>إزاي بتوصل من بيتك لبيت صاحبك؟ بتاخد طرق، وممكن تغير مواصلات، وفي الآخر بتوصل. </p>
      <p>-الإنترنت شغال بنفس الطريقة.</p>
      <p>خلينا نفصص الموضوع ده:</p>
      <p>الـ Switching والـ Routing:</p>
      <p>الـ Switching زي الإشارات"يفطه" في الشارع. بتوجه الرسايل لأقرب محطة.</p>
      <p>الـ Routing زي الـ GPS. بيختار أحسن طريق للرسالة عشان توصل.</p>
    `
  },
  {
    id: 1025,
    title: 'الشبكات  ٢',
    html_inject: `
      <p>الـ Servers:</p>
      <p>دول زي المحطات الرئيسية. بيخزنوا المعلومات وبيردوا على طلبات الناس.</p>
      <p>الـ HTTP Request والـ Response:</p>
      <p>الـ Request: لما تطلب حاجة من صاحبك على Facebook.</p>
      <p>الـ Response: لما صاحبك يرد عليك.</p>
    `
  },
  {
    id: 1026,
    title: 'الشبكات  ٣',
    html_inject: `
      <p>طب إزاي ده مرتبط باللي اتكلمنا عنه قبل كده؟</p>
      <p><br /></p>
      <p>علاقته بالـ Programming Fundamentals:</p>
      <p>لما بتكتب كود يتصل بالإنترنت، بتستخدم المتغيرات والـ loops عشان تتعامل مع البيانات اللي جاية وراحة.</p>
      <p><br /></p>
      <p>علاقته بالـ OOP:</p>
      <p>ممكن تعمل class للـ connection، وclass تاني للـ request، وكده بتنظم الكود بتاعك.</p>
    `
  },
  {
    id: 1027,
    title: 'الشبكات  ٤',
    html_inject: `
      <p>علاقته بالـ Data Structures:</p>
      <p>الـ routers بتستخدم هياكل بيانات زي الـ graphs عشان تلاقي أسرع طريق للرسايل.</p>
      <p><br /></p>
      <p>علاقته بالـ Algorithms:</p>
      <p>فيه خوارزميات خاصة بالـ routing زي الـ Dijkstra's</p>
      <p><br /></p>
      <p>علاقته بالـ Databases:</p>
      <p>لما بتبعت رسالة على Facebook، بتتخزن في قاعدة بيانات على السيرفر.</p>
    `
  },
  {
    id: 1028,
    title: 'مثال عملي',
    html_inject: `
      <p>مثال عملي:</p>
      <p>تخيل إنك عامل تطبيق دردشة بسيط:</p>
      <p>لما تكتب رسالة، ده بيعمل HTTP Request</p>
      <p>الرسالة بتعدي على switches وrouters كتير لحد ما توصل للسيرفر</p>
      <p>السيرفر بيخزن الرسالة في قاعدة بيانات</p>
      <p>السيرفر بيبعت HTTP Response يقول إن الرسالة وصلت</p>
      <p>نفس العملية بتحصل في الاتجاه التاني لما الرسالة توصل لصاحبك</p>
      <p><br /></p>
      <p>ملاحظة ممكن تفيدك:</p>
      <p>افهم الـ networking كويس. ده أساسي في أي شغل برمجة دلوقتي.</p>
    `
  },
  {
    id: 1029,
    title: 'أنظمة تشغيل ١',
    html_inject: `
      <p>سابعاً: Operating Systems</p>
      <p>نظام التشغيل (Operating System) ده زي المايسترو بتاع الأوركسترا.</p>
      <p>بيدير كل حاجة في الكمبيوتر وبيخلي كل الأجزاء تشتغل مع بعض بانسجام.</p>
      <p><br /></p>
      <p>خلينا نفصص شوية:</p>
      <p>إدارة الذاكرة:</p>
      <p>بيقسم الذاكرة على البرامج اللي شغالة</p>
      <p>بيتأكد إن كل برنامج واخد حقه من الذاكرة مش أكتر</p>
    `
  },
  {
    id: 1030,
    title: 'أنظمة تشغيل ٢',
    html_inject: `
      <p>إدارة المعالج (CPU):</p>
      <p>بيقرر أي برنامج يشتغل إمتى وعلى أي جزء من المعالج</p>
      <p>بيضمن إن كل البرامج تاخد فرصتها في الشغل</p>
      <p><br /></p>
      <p>إدارة الملفات:</p>
      <p>بينظم الملفات على الهارد</p>
      <p>بيسمح للبرامج تقرا وتكتب الملفات</p>
      <p><br /></p>
      <p>إدارة الأجهزة (Devices):</p>
      <p>بيتحكم في الأجهزة زي الطابعة والماوس والكيبورد</p>
    `
  },
  {
    id: 1031,
    title: 'أنظمة تشغيل ٣',
    html_inject: `
      <p>طب إزاي ده مرتبط باللي اتكلمنا عنه قبل كده؟</p>
      <p><br /></p>
      <p>علاقته بالـ Programming Fundamentals:</p>
      <p>لما بتكتب برنامج، بتستخدم أوامر خاصة (System Calls) عشان تطلب خدمات من نظام التشغيل</p>
      <p><br /></p>
      <p>علاقته بالـ OOP:</p>
      <p>نظام التشغيل نفسه مبني بالـ OOP، فيه classes للـ memory management، وللـ file system، وهكذا</p>
      <p><br /></p>
      <p>علاقته بالـ Data Structures:</p>
      <p>نظام التشغيل بيستخدم هياكل بيانات زي الـ queues عشان ينظم البرامج اللي عايزة تشتغل</p>
    `
  },
  {
    id: 1032,
    title: 'أنظمة تشغيل ٤',
    html_inject: `
      <p>علاقته بالـ Algorithms:</p>
      <p>فيه algorithms خاصة بنظام التشغيل زي algo جدولة المعالج(CPU Scheduling)</p>
      <p><br /></p>
      <p>علاقته بالـ Databases:</p>
      <p>نظام التشغيل بيتعامل مع الهارد ديسك، وده بيساعد قواعد البيانات تخزن وتجيب البيانات بسرعة</p>
      <p><br /></p>
      <p>علاقته بالـ Networking:</p>
      <p>نظام التشغيل بيوفر خدمات الشبكة للبرامج، زي الـ TCP/IP stack</p>
    `
  },
  {
    id: 1033,
    title: 'مثال عملي',
    html_inject: `
      <p>تخيل إنك فاتح برنامج Word وبرنامج Chrome في نفس الوقت:</p>
      <p>نظام التشغيل بيدي لكل برنامج جزء من الذاكرة</p>
      <p>بيقسم وقت المعالج بينهم</p>
      <p>لما تحفظ ملف في Word، نظام التشغيل بيتعامل مع الهارد</p>
      <p>لما تفتح صفحة في Chrome، نظام التشغيل بيساعد في الاتصال بالإنترنت</p>
      <p><br /></p>
      <p>ملاحظة ممكن تفيدك:</p>
      <p>افهم أساسيات نظم التشغيل.</p>
      <p>حتى لو مش هتشتغل في البرمجة على مستوى النظام، فهم ده هيساعدك تكتب برامج أحسن وأسرع.</p>
    `
  },
  {
    id: 1034,
    title: 'نهاية ١',
    html_inject: `
      <p>و بس كان لحد هنا  نهاية ال جزء الاول من الثريد</p>
      <p>و بداية جزء الثاني منه و هو المصادر</p>
      <p>و هقولك مشيت ازاي مش شرط تمشي زيي انا بس هنقلك تجربتي</p>
    `
  },
  {
    id: 1035,
    title: 'مصادر',
    html_inject: `
      <p>اول حاجه كنت اتعلمتها هي ال C++ و بصراحه انا شايف انها كويسه ل اي حد يبدا بيها</p>
      <p>لان بعد ما تتعلمها هتبدا ت solve problem بيها</p>
      <p><br /></p>
      <p>-طب هنتعلمها منين؟</p>
      <p>
        تعاله اقولك من كورس بشمهندس اسامه الزيرو طبعا غني عن التعريف:
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
    `
  },
  {
    id: 1036,
    title: 'مصادر ٢',
    html_inject: `
      <p>بعدها اتعلمت OOP بالـ C#. الـ C# جامدة في الـ OOP.</p>
      <p>
        لو عايز تعرف ليه اخترتها، شوف التويت ده:
        <a class="mr-1" href="https://x.com/MrXroboT/status/1667655048078192640?s=20" target="_blank">
          <img src="${ twitter_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p>
        اتعلمت الـ C# من موقع W3Schools:
        <a class="mr-1 relative -top-0.5" href="https://www.w3schools.com/cs/index.php" target="_blank">
          <img src="${ w3_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p>
        وللـ OOP بالـ C#، اتعلمته من الكورس ده ITI كورس اقل ما يقال عليه عالمي :
        <a class="mr-1 relative -top-0.5" href="https://drive.google.com/drive/folders/1WbY2Doyapd6FJmM1-vU7A-0VutZMluS-" target="_blank">
        <img src="${ drive_icon }" class="inline-flex" />
      </a>
      </p>
    `
  },
  {
    id: 1037,
    title: 'مشاريع',
    html_inject: `
      <p>طب تطبق مشاريع عليها منين؟</p>
      <p>
        ده مشروع CRUD انا اللي عامله ممكن تبص عليه:
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLoRh0POuk1Rw-LATGAjLWQTnS2jknpjZu" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p>و دي مشروع كبير educational management system</p>
      <p>
        و ده الريبو بتاعه علي github:
        <a class="mr-1 relative -top-0.5" href="https://github.com/Mostafay65/Educational-Management-System-OOP-project-" target="_blank">
          <img src="${ github_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p>
        و دول 3 مشاريع علي oop كمان موجودين في Sheet بكل تفاصيلهم:
        <a class="mr-1 relative -top-0.5" href="https://drive.google.com/drive/u/0/folders/1G523fKsRp6bNCzt_005c7vBHe7Ni5Mt1?fbclid=IwAR1nAcvzLvZO_iq50YhRsV7_Em_E7il-WzyTbNi5nIe42peglaErkxkPnTs" target="_blank">
          <img src="${ drive_icon }" class="inline-flex" />
        </a>
      </p>
    `
  },
  {
    id: 1038,
    title: 'مصادر ٣',
    html_inject: `
      <p>بعد كده اتعلمت الـ data structure بالـ C++.</p>
      <p>ليه C++؟ عشان فيها حاجة اسمها pointers، هتفهمها كويس هنا.</p>
      <p><br /></p>
      <p>
        استخدمت قناة MEGA CODE:
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLsGJzJ8SQXTcsXRVviurGei0lf_t_I4D8" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p> وكمان كورس المهندس عادل نسيم بيسهل الدنيا ف الDS جدا </p>
      <p>
        بس هو شارح linear DS بس:
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLCInYL3l2AajqOUW_2SwjWeMwf4vL4RSp" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
    `
  },
  {
    id: 1039,
    title: 'مصادر ٤',
    html_inject: `
      <p>
        للـ algorithms، كملت مع المهندس عادل نسيم:
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLCInYL3l2AajqOUW_2SwjWeMwf4vL4RSp" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p>
        و طبعا مننساش اسطورة الالجورزمات اجدعوها هندي عبدالباري:
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p>و بعدها اتعلمت الـ database بـ SQL server.</p>
      <p>بلاي ليست ITI هتحتاج تتعب عليها جامد بصراحه في الاول</p>
      <p>
        دي ليها جزء نظري وجزء عملي. شوف الفيديوهات دي:
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLoRh0POuk1Rw-BZU-DPI6cA_c5W9_2uF_" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p>
        و ده شرح NoSQL ITI - Mongo DB :
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLesfn4TAj57XGGSmVzzpxY69-lha1EWEI" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
    `
  },
  {
    id: 1040,
    title: 'نهاية ٢',
    html_inject: `
      <p>وبعدها اتعلمت شبكات من مصادر مختلفه مش ثابته</p>
      <p>
        بس لو هرشحلك حد هيبقا بشمهندس مهاب علاء كويس :
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLQXgDrsmqpLwULiDPr_4iWHMmKhzbQamj" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p>
        وبعدها اتعلمت Operating Systems من كورس ال ITI : 
        <a class="mr-1 relative -top-0.5" href="https://www.youtube.com/playlist?list=PLSGEGD0dbMKoigQWgVJ_UoUJUGQPCHXKV" target="_blank">
          <img src="${ youtube_icon }" class="inline-flex" />
        </a>
      </p>
      <p><br /></p>
      <p>
        وده لينك كل الماتريل علي git hub:
        <a class="mr-1 relative -top-0.5" href="https://github.com/mrXrobot26/Programming-Basics-Learning-Path" target="_blank">
          <img src="${ github_icon }" class="inline-flex" />
        </a>
      </p>
    `
  },
  {
    id: 1041,
    title: 'مسك الختام',
    html_inject: `
      <p>نصيحة أخيرة: (solve problems) كتير وإنت بتتعلم. ده هيثبت اللي اتعلمته.</p>
      <p>ولو وصلت لهنا انا بحبك و خليك عارف ان زكاة العلم نشره و تعليمه</p>
      <p>أتمنى أكون فدتك ولو بحاجة بسيطة.</p>
      <p>متنساش تدعيلي!</p>
    `
  },
]