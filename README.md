# pegadaian_test
online test PT.Pegadaian

<hr/>

<b>Jawaban Soal umum :</b> 

<br/><br/>
1. Multi threading adalah kemampuan sebuah program untuk melakukan lebih dari satu pekerjaan sekaligus. 
   Keuntungan dari multithreading adalah sifat respons yang interaktif dan real-time. 
   Arti istilah Multithreading dianggap berkaitan erat dengan pengertian multi thread merupakan 
   jalannya beberapa proses dengan urutan yang cepat (multitasking) dalam satu program.
<br /><br/>
2. Unit Testing adalah metode verifikasi perangkat lunak di mana programmer menguji suatu unit program layak untuk 
   tidaknya dipakai. Unit testing ini fokusnya pada verifikasi pada unit yang terkecil pada desain perangkat 
   lunak (komponen atau modul perangkat lunak). Karena dalam sebuah perangkat lunak banyak memiliki unit-unit 
   kecil maka untuk mengujinya biasanya dibuat program kecil atau main program) untuk menguji unit-unit perangkat lunak.
   Unit-unit kecil ini dapat berupa prosedur atau fungsi, sekumpulan prosedur atau fungsi yang ada dalam satu file jika
   dalam pemrograman terstruktur, atau kelas, bisa juga kumpulan kelas dalam satu package dalam PBO. Pengujian unit 
   biasanya dilakukan saat kode program dibuat.
<br /><br/>
3. Seperti diketahui, dalam aplikasi enterprise kedua lingkungan tersebut berada pada sistem yang berbeda, 
   yaitu OOP berada pada sisi pemrograman aplikasi, sedangkan database relasional berada pada sisi sistem database. 
   Misi utama dari ORM ini adalah menjembatani kedua sistem yang berbeda dalam membuat aplikasi.
<br/><br/>
4. Microservice adalah kumpulan proses independen dan kecil yang berkomunikasi antara satu dengan lainnya untuk membentuk aplikasi kompleks yang agnostik terhadap bahasa API apa pun. Servis-servis ini terdiri dari blok-blok kecil, terpisah, dan fokus pada tugas-tugas ringan untuk memfasilitasi metode modular dalam pembangunan sistem. Arsitektur bergaya microservice mulai menjadi standar dalam pembangunan sistem yang dinamis dan konstan berkembang.<br>
Keuntungan menggunakan microservices yakni salah satunya memudahkan pengembangan suatu services tanpa memiliki akibat atau resiko besar dari suatu perubahan sistem yang dilakukan. Programmer bisa lebih cepat melalukan perubahan, penambahan fitur, perbaikan, melakukan unit testing karena microservice menangani service yang terpisah dan focus.
<br /><br />
5. RESTfull adalah suatu arsitektur metode komunikasi yang menggunakan protokol HTTP untuk pertukaran data dan metode ini sering diterapkan dalam pengembangan aplikasi. Dimana tujuannya adalah untuk menjadikan sistem yang memiliki performa yang baik, cepat dan mudah untuk di kembangkan (scale) terutama dalam pertukaran dan komunikasi data. Aplikasi yang dibangun dengan RESTFull API tentunya dapat diintegrasikan dengan berbagai pengembang lainnya. Tanpa perlu harus bahasa pemrograman yang sama. Dan tanpa harus mengakses database secara langsng. <br />
Untuk menggunakan POST, bisa dilakukan saat ingin mensubmit data. <br />
Untuk menggunakan GET, bisa dilakukan saat ingin melakukan fetching data 
<br /><br />
6.
<ul>
   <li>Javascript: 10 </li>
   <li>React: 10 </li>
   <li>Node.js: 10 </li>
   <li>Python: 0 </li>
   <li>Java: 8 </li>
   <li>Go: 0 </li>
   <li>PHP: 10 </li>
   <li>MongoDB: 7 </li>
   <li>AWS: 0 </li>
   <li>Cassandra: 5 </li>
   <li>Elastic Search: 0 </li>
   <li>Data Science: 0 </li>
   <li>Git: 10 </li>
   <li>CI/CD: 0  </li>
   <li>Docker: 0 </li>
   <li>MySQL: 10 </li>
</ul>
<hr />

<b>Jawaban Soal Teknikal :</b> 

Dikerjakan dengan menggunakan bahasa Node JS.
Untuk dapat melakukan pemeriksaana terhadap jawaban dibutuhkan NodeJS, XAMPP ( Local server boleh bebas yang support MySQL ), POSTMAN atau INSOMNIA.

1. Langkah pertama, download source code dari GIT ini dan download database di url : https://drive.google.com/open?id=10aU8aPKU7IVVQiEdnwS9sHO6069eyQOM
2. Buka CMD. Masuk ke direktori yang telah mengandung source code ini.
3. Setelah di dalam direktori yang berisikan source code ini, ketik npm install ( asumsi NODE js telah diinstall )
4. Tambahkan library tambahan 
   <pre>npm install express --save</pre>
   <small>Sebagai framework NodeJs</small>
   <pre>npm install xmldoc</pre>. 
   <small>Library ini berguna untuk proses xml parser.</small>
5. Import database yang telah didownload ke dalam XAMPP atau server local apapun.
6. Jalankan aplikasi dengan mengetikkan <pre>node server.js</pre>
7. Jalan Postman/Insomnia dan arahkan URL ke alamat endpoint berikut : 
<ul>
   <li> 
      <b>Soal no.1 : </b>
      <p>metode POST</p>
      <pre>http://localhost:3000/api/1/simpleMinMax</pre>
      <span>body request JSON : </span>
      <pre>{ "array" : [0,13,9] }</pre>
   </li>
   <li> 
      <b>Soal no.2 : </b>
      <p>metode POST</p>
      <pre>http://localhost:3000/api/1/findMinMax</pre>
      <span>body request JSON : </span>
      <pre>{"array":[0,13,9]}</pre>
      <br/>
      <p>metode GET</p>
      <pre>http://localhost:3000/api/1/findMinMax</pre>
      <span>body request JSON : </span>
      <pre></pre>
   </li>
   
   <li> 
      <b>Soal no.3 : </b>
      <p>metode POST</p>
      <pre>http://localhost:3000/api/1/checkDuplicate</pre>
      <span>body request JSON : </span>
      <pre>{ "word" : 'berkesinambungan' }</pre>
   </li>
   
   <li> 
      <b>Soal no.4 : </b>
      <p>metode POST</p>
      <pre>http://localhost:3000/api/1/checkWord</pre>
      <span>body request JSON : </span>
      <pre>{ "word" : 'string123' }</pre>
   </li>
   
   <li> 
      <b>Soal no.5 : </b>
      <p>metode GET</p>
      <pre>http://localhost:3000/api/1/getHisRate</pre>
      <span>body request JSON : </span>
      <pre>{ "endpoint" : 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml' }</pre>
   </li>
</ul>
