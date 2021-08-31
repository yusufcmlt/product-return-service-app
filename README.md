# Bitirme projesi

---

### Başvuru / ticket yönetim sistemi ===> Urun iade ticket sistemi

---

<h2 align="center"> 
 <a href="https://graduation-project-yusufcmlt.netlify.app" target="_blank" >>>>Demo<<<</a></h2>
 <h3 align="center"> Kullanici adi: kodluyoruz</h3>
 <h3 align="center"> Sifre: bootcamp109</h3>

<video src=" https://user-images.githubusercontent.com/58252790/131495574-d18c8897-09cf-4255-885e-a0ddab83c8d6.mp4" width="1280" height="720" controls preload autoplay></video>

---

#### Kullanilan araclar/kutuphaneler

- React - Context API - Hooks
- react-router
- node-sass / SASS
- react-hook-form - yup
- eslint / eslint-airbnb-config
- Firebase - Firestore database
- React Testing Library - Jest - Enzyme (Cok basarili olamadim.)
- Figma - [Tasarim Linkine Ulasabilirsiniz](https://www.figma.com/file/dKSRwEgMKDe1pWKkOoSALX/innovance-graduation-project?node-id=0%3A1)

---

#### Notlar:

- Default olarak `/basvuru-olustur` yerine bir site anasayfasi varmis gibi ilerledim. Anasayfadaki button ile istenen sayfaya gecilebilir durumda.

- `/admin/basvuru/{basvuruNo}` yerine de `/admin/basvuru-listesi/{basvuruNo}` seklinde kullandim. Adres yine basvuru no olmadan da kullanilabilir durumda.

- Eslint ile airbnb config kullanarak gelistirme yapmaya calistim. no-console ve bazi erisilebilirlik kurallarini disable ettim.

- Testler konusunda zorlandim. Test kismi biraz karisik olabilir. Belki nasil test yazilmaz diye ornek bile gosterilebilirim 😃

#### Genel Açıklama

Uygulamamız herkese açık bir başvuru formunun son kullanıcı tarafından doldurulması ile başlıyor.
Formu dolduran kullanıcıya başvurusunu takip edebilecegi bir kod veriliyor. Kullanıcı başvuru durumu sayfasından bu kod ile başvurusunun çözülüp çözülemedigini kontrol edebiliyor.

Kullanıcı adı ve şifre ile girilebilen bir ekrandan da yetkili kullanıcılar gelen başvuruları görüntüleyebiliyor cevaplanmamış başvurulara cevap yazıp durumunu çözüldü / iptal edildi / bekliyor vb gibi güncelleyebiliyor. Gerekirse eski kayıtlara ulaşabiliyor.

#### Detaylı Açıklama

##### Routes / Paths

- /basvuru-olustur (default)

  - Public endpoint.
  - Başvuru formunu herhangi bir kullanıcının doldurmasına imkan verir.
  - Başvuru formunda [Ad, Soyad, Yaş, TC, Başvuru Nedeni, Adres Bilgisi, Fotograflar/Ekler, Gonder] butonu yer alır.

- /basvuru-basarili (Basvuru formu doldurulduktan sonra gelen sayfa)

  - Ekranda bir teşekkür mesajı yer alır ve kullanıcıya başvuru detayları ile birlikte başvuru kodu verilir.

- /basvuru-sorgula

  - Ekranda başvuru kodu girilebilen bir input ve sorgula butonu vardır.

- /basvuru/{basvuruNo}

  - Ekranda başvuru varsa bilgileri, son durumu ve verilen cevap(lar) yer alır.
  - Başvuru numarası hatalıysa 404(bulunamadı) mesajı çıkar.

- /admin

  - Ekranda kullanıcı giriş formu vardır. (Rahat test edebilmemiz için u:kodluyoruz, p:bootcamp109 bilgileri ile giriş yapabilmeliyim.)

- /admin/basvuru-listesi

  - Başarıli giriş sonrası bekleyen (çözülmemiş/cevaplanmamış) başvuruların listesi yer alır ve basit bilgiler sunar. (Başvuru yapan, tarih)
  - Başvuru listesinde her elemenda başvuruyu görüntüle butonu vardır.

- /admin/basvuru/{basvuruNo}
  - Başvurunun durumu güncellenebilir ve başvuruya cevap yazılabilir.
  - Burada yazılan cevap son kullanıci tarafından basvuru/{basvuruNo} kısmından görüntülenebilmelidir.

##### Gereklilikler

- React hooks
- Router (react-router/ reach router / etc)
- Context API
- Form management library (react-hook-form(önerilen) / formik / etc)
- Validation library (yup(önerilen), joi, etc)
- Tests (Unit test zorunlu, e2e opsiyonel)
- Uygulamanız kesinlikle bir servise deploy edilmiş olacak ve public link readme içinde yer alacak (netlify, vercel gibi)
- Open source
- Eslint

##### Dikkat edelim

- Tüm formlarda gerekli validasyonlar olsun.
- Back-end yazmak zorunda degilsiniz, back-end olarak firebase ya da mock bir api kullanabilirsiniz.
- Elinizden gelen en iyi şekilde seperation of concerns'e dikkat ederek yazın.
- Admin paneline u:kodluyoruz, p:bootcamp109 bilgileri ile giriş yapabilmeliyim.

##### Bonus (Zorunlu degil, deneysel ozellikler)

- Typescript
- Service worker ile offline render destegi
- Mobil uyumlulu guzel bir tasarim
- Kullanilabilir UX
