import type { Dictionary } from "../get-dictionary";

export const tr: Dictionary = {
  meta: {
    titleDefault: "Edanam — ERP Danışmanlığı, Excel Otomasyonu ve Dijital Ürünler",
    titleTemplate: "%s — Edanam",
    description:
      "Edanam, üretim şirketlerine, ERP yöneticilerine ve KOBİ’lere ERP danışmanlığı, Excel otomasyonu ve dijital ürünler sunar.",
  },
  nav: {
    home: "Ana Sayfa",
    services: "Hizmetler",
    caseStudies: "Referanslar",
    blog: "Blog",
    contact: "İletişim",
    bookCall: "Keşif görüşmesi planla",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    homeAria: "Edanam ana sayfa",
    primaryAria: "Ana menü",
    servicesItems: [
      {
        href: "/services/erp-consulting",
        title: "ERP Danışmanlığı",
        description: "Seçim, uygulama, iyileştirme",
      },
      {
        href: "/services/excel-automation",
        title: "Excel Otomasyonu",
        description: "Raporlama, modeller, iş akışları",
      },
      {
        href: "/services/digital-products",
        title: "Dijital Ürünler",
        description: "Operasyonu ölçekleyen araçlar",
      },
    ],
  },
  language: {
    label: "Dil",
    en: "EN",
    tr: "TR",
  },
  footer: {
    blurb: "Üretim ve KOBİ’ler için ERP danışmanlığı, Excel otomasyonu ve dijital ürünler.",
    services: "Hizmetler",
    company: "Kurumsal",
    contact: "İletişim",
    rights: "© 2026 Edanam. Tüm hakları saklıdır.",
  },
  common: {
    explore: "İncele",
    skipToContent: "İçeriğe geç",
  },
  diagram: {
    caption:
      "Hiyerarşi diyagramı: Merkezde Core ERP; Finance GL/AP, Supply MRP, Plant MES, People HR/WMS ve Customer CRM bağlantılı. Supply, Plant ve People entegre olarak işaretlenmiştir.",
    integrated: "Entegre",
    adjacent: "Komşu",
    nodes: {
      finance: { domain: "Finans", system: "GL / AP" },
      supply: { domain: "Tedarik", system: "MRP" },
      core: { domain: "Çekirdek", system: "ERP" },
      plant: { domain: "Üretim", system: "MES" },
      people: { domain: "İnsan", system: "IK / WMS" },
      customer: { domain: "Müşteri", system: "CRM" },
    },
  },
  home: {
    positioning: "Operasyonel bilgiyi dijital sistemlere dönüştürüyoruz.",
    chips: ["Üretim", "ERP", "Otomasyon", "MES"],
    headline: "Sistemler, tablolar ve ürünler tesisi yönetsin—tersi olmasın.",
    subhead:
      "Üretim şirketleri, ERP yöneticileri ve büyüyen KOBİ’ler için ERP danışmanlığı, Excel otomasyonu ve dijital ürünler.",
    ctaPrimary: "Keşif görüşmesi planla",
    ctaSecondary: "Referansları gör",
    trustedBy: "Üretim ve dağıtımda operasyon liderlerinin güvendiği partner",
    trustedAria: "Referanslar",
    servicesEyebrow: "Hizmetler",
    servicesTitle: "Operasyonel netlik için üç yol.",
    servicesLead:
      "Kurumsal platformlardan hâlâ işi yürüten tablolara—ve hazır olduğunuzda onların yerini alan ürünlere.",
    services: [
      {
        title: "ERP Danışmanlığı",
        description:
          "Üretim ERP’si için satıcıdan bağımsız seçim, uygulama liderliği ve canlıya geçiş sonrası toparlama.",
        link: "/services/erp-consulting",
      },
      {
        title: "Excel Otomasyonu",
        description:
          "ERP ile saha gerçekliği arasındaki boşluğu kapatın—otomatik raporlar, planlama modelleri ve kontrollü çalışma kitapları.",
        link: "/services/excel-automation",
      },
      {
        title: "Dijital Ürünler",
        description:
          "Stok, planlama ve operasyon için amaca yönelik araçlar—yalnızca tablo ve ERP yetmediğinde.",
        link: "/services/digital-products",
      },
    ],
    audienceTitle: "Kayıt sisteminin sahibini düşünerek tasarlandı.",
    audienceLead:
      "Programlar tıkanınca maliyet; stok kör noktaları, geciken sevkiyatlar ve rakamlara güvenmeyen ekipler olur.",
    audiences: [
      {
        title: "Üretim şirketleri",
        description:
          "BOM doğruluğu, saha entegrasyonu ve gerçek üretim şeklinize uyan planlama.",
        variant: "manufacturing",
      },
      {
        title: "ERP yöneticileri",
        description:
          "Satıcıdan bağımsız yol haritaları, temiz geçişler ve canlıya geçiş sonrası dürüst kapsam yönetimi.",
        variant: "erp",
      },
      {
        title: "Büyüyen KOBİ’ler",
        description:
          "Doğru ölçekli platform ve otomasyon—aşırı alım yok, eksik spec yok; finans, operasyon ve satış tek gerçeği paylaşır.",
        variant: "sme",
      },
    ],
    casesEyebrow: "Referanslar",
    casesTitle: "Yönetim kuruluna götürebileceğiniz sonuçlar.",
    casesLink: "Tüm referansları gör",
    metrics: [
      {
        value: "%38",
        label: "Daha hızlı dönem sonu kapanışı",
        detail: "Hassas bileşen · 420 çalışan",
      },
      {
        value: "%22",
        label: "Stok taşıma maliyetinde düşüş",
        detail: "Gıda & içecek · çok sahalı",
      },
      {
        value: "14 hf",
        label: "Dondurulmuş kapsamdan canlıya geçiş",
        detail: "Diskret montaj · sıfırdan ERP",
      },
    ],
    blogEyebrow: "Blog",
    blogTitle: "Araçtan önce düşünce.",
    blogLink: "Blogu oku",
    posts: [
      {
        title: "Üretim RFP’lerinin çoğu neden yanlış ERP’yi seçer",
        description:
          "Demo tiyatrosu vs. süreç uyumu—ve kısa listeyi değiştiren üç soru.",
        meta: "Özet · 8 dk",
      },
      {
        title: "Tesisinizin dayanacağı bir cutover kontrol listesi",
        description:
          "Paralel çalışma kriterleri, dondurma pencereleri ve gerçekten işe yarayan go/no-go panosu.",
        meta: "Oyun kitabı · 12 dk",
      },
      {
        title: "Excel ne zaman kalmalı—ne zaman gitmeli",
        description:
          "Finans kapanışını bozmadan otomasyon için pratik bir çerçeve.",
        meta: "Otomasyon · 6 dk",
      },
    ],
    ctaTitle: "45 dakikalık bir keşif görüşmesiyle başlayın.",
    ctaLead:
      "Sistemin işletmeyi nerede düşürdüğünü anlatın. Uygunluk, risk ve ilk 90 gün için net bir okuma döneriz.",
    ctaButton: "İletişime geç",
    ctaBadge: "45 dk",
  },
  contact: {
    metaTitle: "İletişim",
    metaDescription:
      "ERP danışmanlığı, Excel otomasyonu veya dijital ürünler için Edanam ile 45 dakikalık keşif görüşmesi planlayın.",
    eyebrow: "İletişim",
    title: "45 dakikalık bir keşif görüşmesiyle başlayın.",
    lead: "Sistemin işletmeyi nerede düşürdüğünü anlatın. Uygunluk, risk ve ilk 90 gün için net bir okuma döneriz.",
    bullets: [
      "Satıcı sunumu yok—önce mimari",
      "Üretim ve KOBİ uzmanlığı",
      "48 saat içinde yazılı özet",
    ],
    emailLabel: "E-posta",
    form: {
      fullName: "Ad soyad",
      fullNamePlaceholder: "Ali Yılmaz",
      workEmail: "İş e-postası",
      workEmailPlaceholder: "ali@sirket.com",
      phone: "Telefon",
      phonePlaceholder: "+90 5xx xxx xx xx",
      company: "Şirket",
      companyPlaceholder: "Örnek Üretim A.Ş.",
      interest: "İlgi alanı",
      interestPlaceholder: "İlgi alanı seçin",
      interests: {
        erp: "ERP Danışmanlığı",
        excel: "Excel Otomasyonu",
        digital: "Dijital Ürünler",
        unsure: "Henüz emin değilim",
      },
      message: "Ne konuşalım?",
      messagePlaceholder: "Sistemleriniz ve hedefleriniz hakkında kısa bağlam…",
      submit: "Keşif görüşmesi talep et",
      submitting: "Gönderiliyor…",
      success: "Teşekkürler—bir iş günü içinde dönüş yapacağız.",
      error: "Bir hata oluştu. Lütfen hello@edanam.com adresine yazın veya tekrar deneyin.",
      consent: "Göndererek Edanam hizmetleri hakkında iletişime geçilmesini kabul edersiniz.",
    },
  },
  caseStudies: {
    metaTitle: "Referanslar",
    metaDescription:
      "Üretim ve KOBİ’lerde ERP, Excel otomasyonu ve dijital ürünlerde müşteri sonuçları.",
    eyebrow: "Referanslar",
    title: "Yönetim kuruluna götürebileceğiniz sonuçlar.",
    lead: "ERP programları, tablo otomasyonu ve dijital ürünlerde seçilmiş çalışmalar.",
    cta: "Benzer bir çalışma başlatın",
    items: [
      {
        tag: "ERP Danışmanlığı",
        title: "Helix Components — %38 daha hızlı dönem sonu kapanışı",
        body: "Hassas üretici, 420 çalışan. Sıfırdan ERP için seçim ve geçişi yönettik—dondurma kriterleri, paralel çalışma ve ilk günden finans sahipliği.",
        stats: [
          { label: "Sonuç", value: "%38 daha hızlı kapanış" },
          { label: "Süre", value: "14 haftada canlıya geçiş" },
        ],
      },
      {
        tag: "Excel Otomasyonu",
        title: "Meridian Foods — 2 saatin altında stok paketi",
        body: "Çok sahalı paketleyici. Kırılgan 40 sekmeli kitabı Power Query hatları ve yönetilen bir modelle değiştirdik—aynı KPI’lar, hafta sonu yeniden kurma yok.",
        stats: [
          { label: "Sonuç", value: "%22 daha düşük taşıma maliyeti" },
          { label: "Operasyon süresi", value: "haftada −12 saat" },
        ],
      },
      {
        tag: "Dijital Ürünler",
        title: "NordForge — saha çizelgeleme çalışma tezgâhı",
        body: "ERP siparişleri üzerine kısıt farkındalıklı bir çizelgeleme yüzeyi kurduk. Planlamacılar günlük dondurma için Excel’e aktarmayı bıraktı.",
        stats: [
          { label: "Sonuç", value: "90 günde +%9 OTD" },
          { label: "Benimsenme", value: "%100 planlamacı kullanımı" },
        ],
      },
    ],
  },
  blog: {
    metaTitle: "Blog",
    metaDescription:
      "Üretim liderleri için ERP, Excel otomasyonu ve dijital operasyon üzerine özetler ve oyun kitapları.",
    eyebrow: "Blog",
    title: "Araçtan önce düşünce.",
    lead: "Kayıt sistemini sahiplenen ERP yöneticileri, tesis liderleri ve KOBİ operatörleri için kısa özetler.",
    footerPrompt: "Tam brifing paketini ister misiniz?",
    footerLink: "Bize ulaşın",
    posts: [
      {
        meta: "ERP · 8 dk",
        title: "Üretim RFP’lerinin çoğu neden yanlış ERP’yi seçer",
        description:
          "Demo tiyatrosu vs. süreç uyumu—ve kısa listeyi değiştiren üç soru.",
      },
      {
        meta: "Oyun kitabı · 12 dk",
        title: "Tesisinizin dayanacağı bir cutover kontrol listesi",
        description:
          "Paralel çalışma kriterleri, dondurma pencereleri ve gerçekten işe yarayan go/no-go panosu.",
      },
      {
        meta: "Excel · 6 dk",
        title: "Excel ne zaman kalmalı—ne zaman gitmeli",
        description: "Finans kapanışını bozmadan otomasyon için pratik bir çerçeve.",
      },
      {
        meta: "Ürünler · 7 dk",
        title: "PMO ordusu olmadan canlıya geçiş sonrası ERP yönetimi",
        description:
          "Geliştirmeleri verim ve marja bağlayan, KOBİ’ler için hafif ritimler.",
      },
    ],
  },
  services: {
    label: "Hizmetler",
    erp: {
      metaTitle: "ERP Danışmanlığı",
      metaDescription:
        "Üretim ve KOBİ’ler için satıcıdan bağımsız ERP seçimi, uygulama liderliği ve iyileştirme.",
      title: "Yönetim kurulu düzeyinde ERP danışmanlığı.",
      lead: "Üretim şirketleri ve ERP yöneticilerinin, operatörlerin gerçekten kullanacağı sistemleri seçmesine, uygulamasına ve yönetmesine yardımcı oluruz.",
      deliverTitle: "Ne sunuyoruz",
      deliverables: [
        {
          title: "ERP seçimi ve RFP",
          body: "satıcıdan bağımsız puanlama, kullanım senaryolarınıza dayalı demo senaryoları ve finansın güvendiği bir TCO modeli.",
        },
        {
          title: "Uygulama liderliği",
          body: "SI ile tesisiniz arasında program yönetimi; kapsamı ve canlıya geçiş hazırlığını korur.",
        },
        {
          title: "Optimizasyon ve toparlama",
          body: "Canlı ERP beklenen değeri vermediğinde kök neden analizi ve 90 günlük değer planı.",
        },
      ],
      methodTitle: "Yöntemimiz",
      method: [
        {
          n: "01",
          title: "Operasyonel gerçeği teşhis et",
          body: "Lisans seçilmeden önce süreç haritalama ve veri kalitesi.",
        },
        {
          n: "02",
          title: "Hedef mimariyi tasarla",
          body: "Modül kapsamı, entegrasyonlar ve kurulun takip edebileceği karar günlüğü.",
        },
        {
          n: "03",
          title: "Kontrollü geçiş",
          body: "Verimi koruyan aşamalı yayılım ve hypercare.",
        },
        {
          n: "04",
          title: "Değer için yönet",
          body: "KPI sahipliği ve özellik listesi değil, P&L’ye bağlı bir backlog.",
        },
      ],
      bestFit: "En uygun",
      fitItems: [
        "Diskret ve proses üreticileri",
        "ERP’sini modernize eden çok sahalı KOBİ’ler",
        "Uygulama ortasındaki ERP yöneticileri",
      ],
      cta: "ERP programınızı konuşalım",
      alsoSee: "Ayrıca bakın",
      and: "ve",
    },
    excel: {
      metaTitle: "Excel Otomasyonu",
      metaDescription:
        "Üretim ve finans ekipleri için otomatik raporlama, planlama modelleri ve kontrollü Excel iş akışları.",
      title: "Finans ve operasyonun güvendiği Excel otomasyonu.",
      lead: "Hâlâ işi yürüten tabloları sağlamlaştırırız—sonra asla manuel olmaması gereken yolları otomatikleştiririz.",
      cards: [
        {
          title: "Rapor paketleri",
          body: "ERP dışa aktarımlarından çeken dönem sonu, stok ve OTIF paketleri—versiyonlu, belgelenmiş ve sahiplenilmiş.",
        },
        {
          title: "Planlama modelleri",
          body: "Talep, kapasite ve maliyet modelleri; senaryolar baskı altında bile denetlenebilir kalsın.",
        },
        {
          title: "İş akışı otomasyonu",
          body: "Kritik yollardan kopyala-yapıştırmayı kaldıran Power Query, Office Scripts ve kontrollü makrolar.",
        },
      ],
      whenTitle: "Excel’in doğru katman olduğu zaman",
      whenBody:
        "Her süreç yeni bir modül gerektirmez. ERP boşluklarını kapatan çalışma kitabı katmanını stabilize ederiz—sonra dijital ürün veya ERP geliştirmenin devralması gereken çıkış kriterlerini tanımlarız.",
      cta: "Kritik bir kitabı otomatikleştirin",
    },
    digital: {
      metaTitle: "Dijital Ürünler",
      metaDescription:
        "ERP ve Excel yetmediğinde stok, planlama ve operasyon için amaca yönelik dijital ürünler.",
      title: "ERP’nin açık bıraktığı boşluklar için dijital ürünler.",
      lead: "Tesisinizin gerçek çalışma biçimine göre tasarlanmış hafif araçlar—önemli yerde entegre, olması gerektiği yerde sade.",
      items: [
        {
          title: "Stok görünürlüğü",
          body: "Operatörlerin kullanacağı, tam WMS programını beklemeden sahalar ve WIP arası gerçek zamanlı görünümler.",
        },
        {
          title: "Planlama tezgâhları",
          body: "ERP ana verisinin üzerinde duran, kırılgan tablo döngülerini değiştiren kısıt farkındalıklı planlama yüzeyleri.",
        },
        {
          title: "Operasyon panoları",
          body: "Verim, fire ve çizelge uyumu—yalnızca kurul paketi için değil, günlük stand-up için.",
        },
        {
          title: "Entegrasyon bağlayıcısı",
          body: "ERP, MES ve ekiplerin zaten yaşadığı araçlar arasında API’ler ve senkron işleri.",
        },
      ],
      bandTitle: "Yalnızca P&L’nin ihtiyaç duyduğunu inşa edin.",
      bandBody:
        "MVP’leri ölçülebilir bir KPI’ya göre kapsamlar, çeyrekler değil haftalar içinde çıkarır ve Excel yollarını kontrollü geçişle emekli ederiz.",
      cta: "Ürün kapsamı çıkaralım",
    },
  },
};
