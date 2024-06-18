export type Patient = {
  no: number;
  name: string;
  tckn: string;
  age: number;
  gender: 'Erkek' | 'Kadın';
  regDate: string;
  regTime: string;
  status: 'Devam Ediyor' | 'Sırada' | 'Muayene İptal' | 'Gelmedi' | 'Tamamlandı';
};

export type PatientListType = Patient[];

export const PatientListData = [
  { no: 30, name: "Ahmet Yılmaz", tckn: "12345678901", age: 34, gender: "Erkek", regDate: "20.06.2024", regTime: "14:30", status: "Devam Ediyor" },
  { no: 33, name: "Ayşe Kaya", tckn: "23456789012", age: 29, gender: "Kadın", regDate: "12.06.2024", regTime: "09:00", status: "Sırada" },
  { no: 35, name: "Mehmet Çelik", tckn: "34567890123", age: 42, gender: "Erkek", regDate: "-----", regTime: "----", status: "Sırada" },
  { no: 29, name: "Fatma Demir", tckn: "45678901234", age: 65, gender: "Kadın", regDate: "21.06.2024", regTime: "11:15", status: "Sırada" },
  { no: 28, name: "Elif Ak", tckn: "67890123456", age: 34, gender: "Kadın", regDate: "22.06.2024", regTime: "10:00", status: "Muayene İptal" },
  { no: 19, name: "Mert Yılmaz", tckn: "34567890124", age: 50, gender: "Erkek", regDate: "24.06.2024", regTime: "13:45", status: "Gelmedi" },
  { no: 18, name: "Ezgi Demir", tckn: "23456789013", age: 27, gender: "Kadın", regDate: "20.06.2024", regTime: "11:00", status: "Sırada" },
  { no: 23, name: "Murat Aslan", tckn: "78901234567", age: 45, gender: "Erkek", regDate: "22.06.2024", regTime: "10:00", status: "Tamamlandı" },
  { no: 22, name: "Selin Kaya", tckn: "67890123457", age: 36, gender: "Kadın", regDate: "23.06.2024", regTime: "09:15", status: "Sırada" },
  { no: 7, name: "Ayşe Kaya", tckn: "90123456791", age: 29, gender: "Kadın", regDate: "12.06.2024", regTime: "09:00", status: "Sırada" },
  { no: 27, name: "Hande Turan", tckn: "11234567890", age: 39, gender: "Kadın", regDate: "20.06.2024", regTime: "15:45", status: "Gelmedi" },
  { no: 25, name: "Ali Karaca", tckn: "90123456789", age: 28, gender: "Erkek", regDate: "-----", regTime: "----", status: "Tamamlandı" },
  { no: 24, name: "Zeynep Yıldız", tckn: "89012345678", age: 31, gender: "Kadın", regDate: "18.06.2024", regTime: "13:30", status: "Tamamlandı" },
  { no: 21, name: "Emre Yıldırım", tckn: "56789012345", age: 40, gender: "Erkek", regDate: "19.06.2024", regTime: "14:00", status: "Sırada" },
  { no: 20, name: "Leyla Güneş", tckn: "45678901235", age: 33, gender: "Kadın", regDate: "21.06.2024", regTime: "10:30", status: "Sırada" },
  { no: 9, name: "Fatma Demir", tckn: "23456789014", age: 65, gender: "Kadın", regDate: "21.06.2024", regTime: "11:15", status: "Sırada" },
  { no: 8, name: "Mehmet Çelik", tckn: "12345678903", age: 42, gender: "Erkek", regDate: "-----", regTime: "----", status: "Sırada" },
  { no: 2, name: "Mert Yılmaz", tckn: "45678901237", age: 50, gender: "Erkek", regDate: "24.06.2024", regTime: "13:45", status: "Gelmedi" },
  { no: 17, name: "Canan Çelik", tckn: "12345678902", age: 38, gender: "Kadın", regDate: "25.06.2024", regTime: "09:45", status: "Tamamlandı" },
  { no: 1, name: "Ezgi Demir", tckn: "34567890126", age: 27, gender: "Kadın", regDate: "20.06.2024", regTime: "11:00", status: "Tamamlandı" },
  { no: 3, name: "Selin Kaya", tckn: "56789012347", age: 36, gender: "Kadın", regDate: "23.06.2024", regTime: "09:15", status: "Tamamlandı" },
  { no: 4, name: "Emre Yıldırım", tckn: "67890123459", age: 40, gender: "Erkek", regDate: "19.06.2024", regTime: "14:00", status: "Sırada" },
  { no: 6, name: "Ahmet Yılmaz", tckn: "89012345680", age: 34, gender: "Erkek", regDate: "20.06.2024", regTime: "14:30", status: "Tamamlandı" },
  { no: 13, name: "Zeynep Yıldız", tckn: "67890123458", age: 31, gender: "Kadın", regDate: "18.06.2024", regTime: "13:30", status: "Tamamlandı" },
  { no: 12, name: "Ali Karaca", tckn: "56789012346", age: 28, gender: "Erkek", regDate: "-----", regTime: "----", status: "Tamamlandı" },
  { no: 11, name: "Hande Turan", tckn: "45678901236", age: 39, gender: "Kadın", regDate: "20.06.2024", regTime: "15:45", status: "Gelmedi" },
  { no: 16, name: "Kadir Ak", tckn: "90123456790", age: 55, gender: "Erkek", regDate: "26.06.2024", regTime: "08:30", status: "Muayene İptal" },
  { no: 15, name: "Buse Yıldız", tckn: "89012345679", age: 22, gender: "Kadın", regDate: "27.06.2024", regTime: "12:00", status: "Sırada" },
  { no: 14, name: "Murat Aslan", tckn: "78901234568", age: 45, gender: "Erkek", regDate: "22.06.2024", regTime: "10:00", status: "Tamamlandı" },
  { no: 10, name: "Elif Ak", tckn: "34567890125", age: 34, gender: "Kadın", regDate: "22.06.2024", regTime: "10:00", status: "Muayene İptal" },
  { no: 5, name: "Leyla Güneş", tckn: "78901234569", age: 33, gender: "Kadın", regDate: "21.06.2024", regTime: "10:30", status: "Sırada" },
];