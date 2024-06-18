export type Notice = {
id: string;
title: string;
  content: string;
  status: 'urgent' | 'update' | 'standard';
  date: string;
};

export type NoticeBoardType = Notice[];

export const NoticeBoardData =
  [
    {
      id: "001",
      title: "Sistem Bakım Bildirimi",
      content: "Yarın 02:00-04:00 saatleri arasında sistem bakımı yapılacaktır. Bu süre zarfında uygulamaya erişim sağlanamayabilir.",
      status: "urgent",
      date: "30.03.2024"
    },
    {
      id: "002",
      title: "Uygulama Güncellemesi",
      content: "Yeni özellikler eklenmiştir. Lütfen güncellemeyi yapınız.",
      status: "standard",
      date: "05.04.2024"
    },
    {
      id: "003",
      title: "Etkinlik Duyurusu",
      content: "Bu hafta sonu hastanemizde sağlık semineri düzenlenecektir.",
      status: "standard",
      date: "12.04.2024"
    },
    {
      id: "004",
      title: "Bakım Çalışması",
      content: "Yarın gece sistemde bakım çalışması yapılacaktır. Erişim kısıtlı olabilir.",
      status: "standard",
      date: "12.04.2024"
    },
    {
      id: "005",
      title: "Uygulama Güncellemesi",
      content: "Performans iyileştirmeleri için yeni bir güncelleme yayınlandı.",
      status: "update",
      date: "20.04.2024"
    },
    {
      id: "006",
      title: "Sağlık Semineri",
      content: "Bu ayın 30'unda yeni bir sağlık semineri düzenlenecektir.",
      status: "standard",
      date: "25.04.2024"
    },
    {
      id: "007",
      title: "Sistem Yükseltmesi",
      content: "Sistem yükseltme çalışmaları yapılacaktır. Gece 01:00-03:00 arasında erişim olmayabilir.",
      status: "standard",
      date: "10.05.2024"
    },
    {
      id: "008",
      title: "Güncelleme Bildirimi",
      content: "Kullanıcı deneyimini artırmak için yeni bir güncelleme mevcuttur.",
      status: "update",
      date: "10.05.2024"
    },
    {
      id: "009",
      title: "Seminer Duyurusu",
      content: "Ay sonunda yeni bir sağlık semineri yapılacaktır.",
      status: "standard",
      date: "15.05.2024"
    },
    {
      id: "010",
      title: "Bakım Çalışması",
      content: "Sistem bakım çalışması nedeniyle yarın gece erişim kısıtlı olabilir.",
      status: "urgent",
      date: "28.05.2024"
    },
    {
      id: "011",
      title: "Uygulama Güncellemesi",
      content: "Yeni bir güvenlik güncellemesi yayınlanmıştır.",
      status: "standard",
      date: "28.05.2024"
    },
    {
      id: "012",
      title: "Etkinlik Duyurusu",
      content: "Haftaya hastanemizde bir bağış etkinliği düzenlenecektir.",
      status: "standard",
      date: "05.06.2024"
    },
    {
      id: "013",
      title: "Bakım Çalışması",
      content: "Yarın gece sistemde bakım yapılacaktır. Erişim sağlanamayabilir.",
      status: "standard",
      date: "05.06.2024"
    }
  ]