import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  nk = '../assets/PHONES/NOKIA/NOKIA1.4.647000.jpg';
  nk1 = '../assets/PHONES/NOKIA/NOKIA2.469200.jpg';
  nk2 = '../assets/PHONES/NOKIA/NOKIA6.156990.jpg';
  nk3 = '../assets/PHONES/NOKIA/NOKIA1056400.jpg';
  nk4 = '../assets/PHONES/NOKIA/NOKIA15011000.jpg';
  nk5 = '../assets/PHONES/NOKIA/Nokia15013200.jpg';
  nk6 = '../assets/PHONES/NOKIA/NOKIAC135499.jpg';
  nk7 = '../assets/PHONES/NOKIA/NokiaG2086000.jpg';
  nk8 = '../assets/PHONES/NOKIA/NOKIAX10160000.jpg';


  sm = '../assets/PHONES/SAMSUNG/SamGalA22-6.499340.jpg';
  sm1 = '../assets/PHONES/SAMSUNG/SamGalA0371478.jpg';
  sm2 = '../assets/PHONES/SAMSUNG/SamGalA1279900.jpg';
  sm3 = '../assets/PHONES/SAMSUNG/SamGalNote8140000.jpg';
  sm4 = '../assets/PHONES/SAMSUNG/SamGalnote20495900.jpg';
  sm5 = '../assets/PHONES/SAMSUNG/SamGals10252300.jpg';
  sm6 = '../assets/PHONES/SAMSUNG/SamNoteedge47400.jpg';
  sm7 = '../assets/PHONES/SAMSUNG/SamNotes9135000.jpg';


  wd = '../assets/PHONES/WINDOWS/NokiaLumia63016900.jpg';
  wd1 = '../assets/PHONES/WINDOWS/Htchd2.jpg';
  wd2 = '../assets/PHONES/WINDOWS/Htcphone8s.jpg';
  wd3 = '../assets/PHONES/WINDOWS/Htcphone8x.jpg';
  wd4 = '../assets/PHONES/WINDOWS/NokiaLumia640.jpg';
  wd5 = '../assets/PHONES/WINDOWS/NokiaLumia650.jpg';
  wd6 = '../assets/PHONES/WINDOWS/NokiaLumia930.jpg';
  wd7 = '../assets/PHONES/WINDOWS/Htcphone8s.jpg';


  gn = '../assets/PHONES/GIONEE/Gioneef103.jpg';
  gn1 = '../assets/PHONES/GIONEE/Gioneek30.jpg';
  gn2 = '../assets/PHONES/GIONEE/Gioneem3.jpg';
  gn3 = '../assets/PHONES/GIONEE/Gioneem5.jpg';
  gn4 = '../assets/PHONES/GIONEE/Gioneem12.jpg';
  gn5 = '../assets/PHONES/GIONEE/Gionees8.jpg';
  gn6 = '../assets/PHONES/GIONEE/Gionees10.jpg';
  gn7 = '../assets/PHONES/GIONEE/Gionees11.jpg';

  tn = '../assets/PHONES/TECNO/infinixhot9.jpg';
  tn1 = '../assets/PHONES/TECNO/infinixhot10.jpg';
  tn2 = '../assets/PHONES/TECNO/spark3.jpg';
  tn3 = '../assets/PHONES/TECNO/spark4.jpg';
  tn4 = '../assets/PHONES/TECNO/spark5.jpg';
  tn5 = '../assets/PHONES/TECNO/spark5power.jpg';
  tn6 = '../assets/PHONES/TECNO/spark6.jpg';
  tn7 = '../assets/PHONES/TECNO/spark6go.jpg';
  tn8 = '../assets/PHONES/TECNO/spark7t.jpg';
  tn9 = '../assets/PHONES/TECNO/Tecnocamon11.jpg';
  tn10 = '../assets/PHONES/TECNO/Tecnocamon14.jpg';
  tn11 = '../assets/PHONES/TECNO/Tecnocamon15.jpg';
  tn12 = '../assets/PHONES/TECNO/Tecnocamon16.jpg';
  tn13 = '../assets/PHONES/TECNO/Tecnocamon17.jpg';
  tn14 = '../assets/PHONES/TECNO/Tecnocamoni2x.jpg';
  tn15 = '../assets/PHONES/TECNO/Tecnocamoni4.jpg';



  //laptops
  sml = '../assets/LAPTOP/SAMSUNG/samAnd.jpg';
  sml1 = '../assets/LAPTOP/SAMSUNG/samGalBook.jpg';
  sml2 = '../assets/LAPTOP/SAMSUNG/samNote.jpg';
  sml3 = '../assets/LAPTOP/SAMSUNG/samNote9.jpg';
  sml4 = '../assets/LAPTOP/SAMSUNG/samATIVBOOK9.jpg';
  sml5 = '../assets/LAPTOP/SAMSUNG/samATIVULTRABOOK.jpg';
  sml6 = '../assets/LAPTOP/SAMSUNG/samnp300.jpg';
  sml7 = '../assets/LAPTOP/SAMSUNG/samnotebook7.jpg';

  hpl = '../assets/LAPTOP/HP/hp14.jpg';
  hpl1 = '../assets/LAPTOP/HP/hp15.jpg';
  hpl2 = '../assets/LAPTOP/HP/hp240.jpg';
  hpl3 = '../assets/LAPTOP/HP/hp348.jpg';
  hpl4 = '../assets/LAPTOP/HP/hpnotebook.jpg';
  hpl5 = '../assets/LAPTOP/HP/hppavillion15.jpg';
  hpl6 = '../assets/LAPTOP/HP/hpprobook.jpg';
  hpl7 = '../assets/LAPTOP/HP/sonyHpcoreI5.jpg';

  lnl = '../assets/LAPTOP/LENOVO/2in1.jpg';
  lnl1 = '../assets/LAPTOP/LENOVO/ideapad5i.jpg';
  lnl2 = '../assets/LAPTOP/LENOVO/thinkbook14s.jpg';
  lnl3 = '../assets/LAPTOP/LENOVO/thinkbookx1.jpg';


  asl = '../assets/LAPTOP/ASUS/k55.jpg';
  asl1 = '../assets/LAPTOP/ASUS/vivoBook14.jpg';
  asl2 = '../assets/LAPTOP/ASUS/vivoBooks15.jpg';
  asl3 = '../assets/LAPTOP/ASUS/x543.jpg';

  dll = '../assets/LAPTOP/DELL/corei5.jpg';
  dll1 = '../assets/LAPTOP/DELL/dellinspirion15.jpg';
  dll2 = '../assets/LAPTOP/DELL/dellinspirion1525.jpg';
  dll3 = '../assets/LAPTOP/DELL/dellxps13.jpg';

  //HOMEDEVICES
  hdlg = '../assets/HOMEDEVICES/LG/43inch.jpg';
  hdlg1 = '../assets/HOMEDEVICES/LG/300w5.1ch.jpg';
  hdlg2 = '../assets/HOMEDEVICES/LG/Ai-enabled.jpg';
  hdlg3 = '../assets/HOMEDEVICES/LG/digitaldvdmicros.jpg';
  hdlg4 = '../assets/HOMEDEVICES/LG/dvdplayer.jpg';
  hdlg5 = '../assets/HOMEDEVICES/LG/electriccooker.jpg';
  hdlg6 = '../assets/HOMEDEVICES/LG/hometheaterbluethoot.jpg';
  hdlg7 = '../assets/HOMEDEVICES/LG/hometheatersys.jpg';
  hdlg8 = '../assets/HOMEDEVICES/LG/personalbeauty.jpg';
  hdlg9 = '../assets/HOMEDEVICES/LG/tvoled.jpg';
  hdlg10 = '../assets/HOMEDEVICES/LG/washeranddryer.jpg';
  hdlg11 = '../assets/HOMEDEVICES/LG/washingm.jpg';

  hdsg = '../assets/HOMEDEVICES/SAMSUNG/dvd.jpg';
  hdsg1 = '../assets/HOMEDEVICES/SAMSUNG/dvd1.jpg';
  hdsg2 = '../assets/HOMEDEVICES/SAMSUNG/dvdwhite.jpg';
  hdsg3 = '../assets/HOMEDEVICES/SAMSUNG/electronics.jpg';
  hdsg4 = '../assets/HOMEDEVICES/SAMSUNG/mtv.jpg';
  hdsg5 = '../assets/HOMEDEVICES/SAMSUNG/mtv2.jpg';
  hdsg6 = '../assets/HOMEDEVICES/SAMSUNG/mtv3.jpg';
  hdsg7 = '../assets/HOMEDEVICES/SAMSUNG/qled.jpg';

  hdox = '../assets/HOMEDEVICES/OX/fan.jpg';
  hdox1 = '../assets/HOMEDEVICES/OX/fan1.jpg';
  hdox2 = '../assets/HOMEDEVICES/OX/fan2.jpg';
  hdox3 = '../assets/HOMEDEVICES/OX/fan3.jpg';

  hdtg = '../assets/HOMEDEVICES/TIGER/foodjar.jpg';
  hdtg1 = '../assets/HOMEDEVICES/TIGER/generator.jpg';
  hdtg2 = '../assets/HOMEDEVICES/TIGER/icecrusher.jpg';
  hdtg3 = '../assets/HOMEDEVICES/TIGER/jug.jpg';
  hdtg4 = '../assets/HOMEDEVICES/TIGER/oven.jpg';
  hdtg5 = '../assets/HOMEDEVICES/TIGER/ricecooker.jpg';
  hdtg6 = '../assets/HOMEDEVICES/TIGER/steamless.jpg';
  hdtg7 = '../assets/HOMEDEVICES/TIGER/tablefan.jpg';

  hdep = '../assets/HOMEDEVICES/ELEPAQ/generator.jpg';
  hdep1 = '../assets/HOMEDEVICES/ELEPAQ/generator1.3kw.jpg';
  hdep2 = '../assets/HOMEDEVICES/ELEPAQ/generator1.jpg';
  hdep3 = '../assets/HOMEDEVICES/ELEPAQ/generator2.jpg';
  hdep4 = '../assets/HOMEDEVICES/ELEPAQ/generator3.5kva.jpg';
  hdep5 = '../assets/HOMEDEVICES/ELEPAQ/generator3.jpg';
  hdep6 = '../assets/HOMEDEVICES/ELEPAQ/generator4kva.jpg';
  hdep7 = '../assets/HOMEDEVICES/ELEPAQ/generator5.5kva.jpg';

  //watches
  wme = '../assets/WATCHES/MEN/eight.jpg';
  wme1 = '../assets/WATCHES/MEN/seven.jpg';
  wme2 = '../assets/WATCHES/MEN/six.jpg';
  wme3 = '../assets/WATCHES/MEN/five.jpg';
  wme4 = '../assets/WATCHES/MEN/four.jpg';
  wme5 = '../assets/WATCHES/MEN/three.jpg';
  wme6 = '../assets/WATCHES/MEN/two.jpg';
  wme7 = '../assets/WATCHES/MEN/one.jpg';

  wwme = '../assets/WATCHES/WOMEN/eight.jpg';
  wwme1 = '../assets/WATCHES/WOMEN/seven.jpg';
  wwme2 = '../assets/WATCHES/WOMEN/six.jpg';
  wwme3 = '../assets/WATCHES/WOMEN/five.jpg';
  wwme4 = '../assets/WATCHES/WOMEN/four.jpg';
  wwme5 = '../assets/WATCHES/WOMEN/three.jpg';
  wwme6 = '../assets/WATCHES/WOMEN/two.jpg';
  wwme7 = '../assets/WATCHES/WOMEN/one.jpg';

  wfn = '../assets/WATCHES/FASHION/eight.jpg';
  wfn1 = '../assets/WATCHES/FASHION/seven.jpg';
  wfn2 = '../assets/WATCHES/FASHION/six.jpg';
  wfn3 = '../assets/WATCHES/FASHION/five.jpg';
  wfn4 = '../assets/WATCHES/FASHION/four.jpg';
  wfn5 = '../assets/WATCHES/FASHION/three.jpg';
  wfn6 = '../assets/WATCHES/FASHION/two.jpg';
  wfn7 = '../assets/WATCHES/FASHION/one.jpg';

  wth = '../assets/WATCHES/TECH/eight.jpg';
  wth1 = '../assets/WATCHES/TECH/seven.jpg';
  wth2 = '../assets/WATCHES/TECH/six.jpg';
  wth3 = '../assets/WATCHES/TECH/five.jpg';
  wth4 = '../assets/WATCHES/TECH/four.jpg';
  wth5 = '../assets/WATCHES/TECH/three.jpg';
  wth6 = '../assets/WATCHES/TECH/two.jpg';
  wth7 = '../assets/WATCHES/TECH/one.jpg';

  wtk = '../assets/WATCHES/TRACKER/eight.jpg';
  wtk1 = '../assets/WATCHES/TRACKER/seven.jpg';
  wtk2 = '../assets/WATCHES/TRACKER/six.jpg';
  wtk3 = '../assets/WATCHES/TRACKER/five.jpg';
  wtk4 = '../assets/WATCHES/TRACKER/four.jpg';
  wtk5 = '../assets/WATCHES/TRACKER/three.jpg';
  wtk6 = '../assets/WATCHES/TRACKER/two.jpg';
  wtk7 = '../assets/WATCHES/TRACKER/one.jpg';
  myStore = ["PHONES", "LAPTOPS", "HOME DEVICES", "WATCHES"];
  cart: any;
  client: any;
  amount: any;
  myCart: any;
  transaction: any;
  id = 0;
  store = [
    [{
      type: "NOKIA",
      model: [
        { phone: "NOKIA 1.4.6", img: this.nk, price: Math.round(47000 / 560) },
        { phone: "NOKIA 2.4", img: this.nk1, price: Math.round(69200 / 560) },
        { phone: "NOKIA 6.1", img: this.nk2, price: Math.round(56990 / 560) },
        { phone: "NOKIA 105", img: this.nk3, price: Math.round(6400 / 560) },
        { phone: "NOKIA 150", img: this.nk4, price: Math.round(11000 / 560) },
        { phone: "NOKIA 150.1", img: this.nk5, price: Math.round(13200 / 560) },
        { phone: "NOKIA C13", img: this.nk6, price: Math.round(5499 / 560) },
        { phone: "NOKIA G20", img: this.nk7, price: Math.round(86000 / 560) },
        { phone: "NOKIA X10", img: this.nk8, price: Math.round(160000 / 560) },
      ]
    },
    {
      type: "SAMSUNG",
      model: [
        { phone: "GALAXY A22", img: this.sm, price: Math.round(99340 / 560) },
        { phone: "GALAXY A03", img: this.sm1, price: Math.round(71478 / 560) },
        { phone: "GALAXY A12", img: this.sm2, price: Math.round(79900 / 560) },
        { phone: "GALAXY NOTE 8", img: this.sm3, price: Math.round(140000 / 560) },
        { phone: "GALAXY NOTE 20", img: this.sm4, price: Math.round(495900 / 560) },
        { phone: "GALAXY 10", img: this.sm5, price: Math.round(252300 / 560) },
        { phone: "NOTE EDGE", img: this.sm6, price: Math.round(47400 / 560) },
        { phone: "NOTE 9", img: this.sm7, price: Math.round(135000 / 560) }
      ]
    },
    {
      type: "WINDOWS",
      model: [
        { phone: "LUMIA 630", img: this.wd, price: Math.round(16900 / 560) },
        { phone: "WINDOWS HTC HIGH DISPLAY2", img: this.wd1, price: Math.round(32900 / 560) },
        { phone: "HTC 8s", img: this.wd2, price: Math.round(50900 / 560) },
        { phone: "HTC 8x", img: this.wd3, price: Math.round(45000 / 560) },
        { phone: "LUMIA 640", img: this.wd4, price: Math.round(25900 / 560) },
        { phone: "NOKIA LUMIA 650", img: this.wd5, price: Math.round(45900 / 560) },
        { phone: "LUMIA 930", img: this.wd6, price: Math.round(75900 / 560) },
        { phone: "HTC 8s", img: this.wd7, price: Math.round(60900 / 560) },

      ]

    },
    {
      type: "GIONEE",
      model: [
        { phone: "GIONEE F103", img: this.gn, price: Math.round(45000 / 560) },
        { phone: "GIONEE k30", img: this.gn1, price: Math.round(59200 / 560) },
        { phone: "GIONEE M3", img: this.gn2, price: Math.round(56590 / 560) },
        { phone: "GIONEE M5", img: this.gn3, price: Math.round(64000 / 560) },
        { phone: "GIONEE M12", img: this.gn4, price: Math.round(70000 / 560) },
        { phone: "GIONEE S8", img: this.gn5, price: Math.round(75000 / 560) },
        { phone: "GIONEE S10", img: this.gn6, price: Math.round(78000 / 560) },
        { phone: "GIONEE S11", img: this.gn7, price: Math.round(89000 / 560) },
      ]
    },
    {
      type: "TECNO",
      model: [
        { phone: "INFINIX HOT 9", img: this.tn, price: Math.round(47000 / 560) },
        { phone: "INFINIX HOT 10", img: this.tn1, price: Math.round(69200 / 560) },
        { phone: "SPARK 3", img: this.tn2, price: Math.round(56990 / 560) },
        { phone: "SPARK 4", img: this.tn3, price: Math.round(62400 / 560) },
        { phone: "SPARK 5", img: this.tn4, price: Math.round(43000 / 560) },
        { phone: "SPARK 5 POWER", img: this.tn5, price: Math.round(53200 / 560) },
        { phone: "SPARK 6", img: this.tn6, price: Math.round(5499 / 560) },
        { phone: "SPARK 6 GO", img: this.tn7, price: Math.round(86000 / 560) },
        { phone: "CAMON 11", img: this.tn8, price: Math.round(65000 / 560) },
        { phone: "CAMON 14", img: this.tn9, price: Math.round(70000 / 560) },
        { phone: "CAMON 15", img: this.tn10, price: Math.round(80000 / 560) },
        { phone: "CAMON 16", img: this.tn11, price: Math.round(75000 / 560) },
        { phone: "CAMON 17", img: this.tn12, price: Math.round(60000 / 560) },
        { phone: "CAMON I2", img: this.tn13, price: Math.round(80000 / 560) },
        { phone: "CAMON 7T", img: this.tn14, price: Math.round(45000 / 560) },
        { phone: "CAMON I4", img: this.tn15, price: Math.round(60000 / 560) },
      ]
    }
    ],

    //laptops

    [{
      type: "SAMSUNG",
      model: [
        { phone: "S-ANDROID", img: this.sml, price: Math.round(430000 / 560) },
        { phone: "GALAXY BOOK", img: this.sml1, price: Math.round(200000 / 560) },
        { phone: "NOTE", img: this.sml2, price: Math.round(250000 / 560) },
        { phone: "NOTE 9", img: this.sml3, price: Math.round(300000 / 560) },
        { phone: "ATIV BOOK 9", img: this.sml4, price: Math.round(110000 / 560) },
        { phone: "ATIV ULTRA", img: this.sml5, price: Math.round(130200 / 560) },
        { phone: "NP 300", img: this.sml6, price: Math.round(90499 / 560) },
        { phone: "NOTEBOOK 7", img: this.sml7, price: Math.round(86000 / 560) },

      ]
    },
    {
      type: "HP",
      model: [
        { phone: "HP 14", img: this.hpl, price: Math.round(100000 / 560) },
        { phone: "HP 14", img: this.hpl1, price: Math.round(140000 / 560) },
        { phone: "HP 240", img: this.hpl2, price: Math.round(140000 / 560) },
        { phone: "HP 348", img: this.hpl3, price: Math.round(102400 / 560) },
        { phone: "HP NOTEBOOK", img: this.hpl4, price: Math.round(111000 / 560) },
        { phone: "HP PAVILLION 15", img: this.hpl5, price: Math.round(130200 / 560) },
        { phone: "HP PRO BOOK", img: this.hpl6, price: Math.round(150000 / 560) },
        { phone: "SONY CORE 5", img: this.hpl7, price: Math.round(100000 / 560) },
      ]
    },
    {
      type: "LENOVO",
      model: [
        { phone: "2 IN 1", img: this.lnl, price: Math.round(470000 / 560) },
        { phone: "IDEA PAD 5i", img: this.lnl1, price: Math.round(100200 / 560) },
        { phone: "THINKBOOK 14s", img: this.lnl2, price: Math.round(130000 / 560) },
        { phone: "THINKBOOK x1", img: this.lnl3, price: Math.round(120000 / 560) },
      ]

    },
    {
      type: "ASUS",
      model: [
        { phone: "K55", img: this.asl, price: Math.round(97000 / 560) },
        { phone: "VIVO BOOK 14", img: this.asl1, price: Math.round(100200 / 560) },
        { phone: "VIVO BOOK 15", img: this.asl2, price: Math.round(130000 / 560) },
        { phone: "X543", img: this.asl3, price: Math.round(120000 / 560) },
      ]
    },
    {
      type: "DELL",
      model: [
        { phone: "CORE i5", img: this.dll, price: Math.round(47000 / 560) },
        { phone: "INSPIRION 15", img: this.dll1, price: Math.round(69200 / 560) },
        { phone: "INSPIRION 1525", img: this.dll2, price: Math.round(56990 / 560) },
        { phone: "XPS 13", img: this.dll3, price: Math.round(6400 / 560) }
      ]
    }
    ],
    //HOMEDEVICES
    [{
      type: "LG",
      model: [
        { phone: "TV 43INCH", img: this.hdlg, price: Math.round(150000 / 560) },
        { phone: "HOME THEATER", img: this.hdlg1, price: Math.round(70000 / 560) },
        { phone: "TV AI-ENABLED", img: this.hdlg2, price: Math.round(190000 / 560) },
        { phone: "DVD MICROS", img: this.hdlg3, price: Math.round(140000 / 560) },
        { phone: "DVD PLAYER", img: this.hdlg4, price: Math.round(30000 / 560) },
        { phone: "ELECTRIC COOKER", img: this.hdlg5, price: Math.round(90000 / 560) },
        { phone: "BLUETOOTH ENABLED", img: this.hdlg6, price: Math.round(60000 / 560) },
        { phone: "SUBWOOFER", img: this.hdlg7, price: Math.round(86000 / 560) },
        { phone: "PERSONAL BEAUTY", img: this.hdlg8, price: Math.round(16000 / 560) },
        { phone: "OLED", img: this.hdlg9, price: Math.round(160000 / 560) },
        { phone: "WASHER AND DRYER", img: this.hdlg10, price: Math.round(120000 / 560) },
        { phone: "WASHING MACHING", img: this.hdlg11, price: Math.round(100000 / 560) },
      ]
    },
    {
      type: "SAMSUNG",
      model: [
        { phone: "DVD PLAYER", img: this.hdsg, price: Math.round(30000 / 560) },
        { phone: "DVD PLAYER", img: this.hdsg1, price: Math.round(40000 / 560) },
        { phone: "DVD PLAYER", img: this.hdsg2, price: Math.round(30000 / 560) },
        { phone: "ELECTRONICS", img: this.hdsg3, price: Math.round(100000 / 560) },
        { phone: "TV", img: this.hdsg4, price: Math.round(120000 / 560) },
        { phone: "TV", img: this.hdsg5, price: Math.round(135000 / 560) },
        { phone: "TV", img: this.hdsg6, price: Math.round(80000 / 560) },
        { phone: "QLED", img: this.hdsg7, price: Math.round(86000 / 560) },
      ]
    },
    {
      type: "OX",
      model: [
        { phone: "FAN", img: this.hdox, price: Math.round(20000 / 560) },
        { phone: "FAN", img: this.hdox1, price: Math.round(25000 / 560) },
        { phone: "FAN", img: this.hdox2, price: Math.round(30000 / 560) },
        { phone: "FAN", img: this.hdox3, price: Math.round(2000 / 560) },
      ]

    },
    {
      type: "TIGER",
      model: [
        { phone: "FOOD JAR", img: this.hdtg, price: Math.round(27000 / 560) },
        { phone: "GENERATOR", img: this.hdtg1, price: Math.round(30000 / 560) },
        { phone: "ICE CRUSHER", img: this.hdtg2, price: Math.round(56000 / 560) },
        { phone: "WATER HEATER", img: this.hdtg3, price: Math.round(60000 / 560) },
        { phone: "MICROWAVE", img: this.hdtg4, price: Math.round(60000 / 560) },
        { phone: "RICE COOKER", img: this.hdtg5, price: Math.round(30000 / 560) },
        { phone: "STEAMLESS", img: this.hdtg6, price: Math.round(20000 / 560) },
        { phone: "TABLE FAN", img: this.hdtg7, price: Math.round(30000 / 560) },

      ]
    },
    {
      type: "ELEPAQ",
      model: [
        { phone: "GENERATOR", img: this.hdep, price: Math.round(90000 / 560) },
        { phone: "GENERATOR", img: this.hdep1, price: Math.round(69000 / 560) },
        { phone: "GENERATOR", img: this.hdep2, price: Math.round(70000 / 560) },
        { phone: "GENERATOR", img: this.hdep3, price: Math.round(100000 / 560) },
        { phone: "GENERATOR", img: this.hdep4, price: Math.round(120000 / 560) },
        { phone: "GENERATOR", img: this.hdep5, price: Math.round(60000 / 560) },
        { phone: "GENERATOR", img: this.hdep6, price: Math.round(50000 / 560) },
        { phone: "GENERATOR", img: this.hdep7, price: Math.round(86000 / 560) },
      ]
    }
    ],
    //watch
    [{
      type: "MEN",
      model: [
        { phone: "WRIST WATCH", img: this.wme, price: Math.round(47000 / 560) },
        { phone: "WRIST WATCH", img: this.wme1, price: Math.round(69200 / 560) },
        { phone: "WRIST WATCH", img: this.wme2, price: Math.round(56990 / 560) },
        { phone: "WRIST WATCH", img: this.wme3, price: Math.round(6400 / 560) },
        { phone: "WRIST WATCH", img: this.wme4, price: Math.round(20000 / 560) },
        { phone: "WRIST WATCH", img: this.wme5, price: Math.round(30200 / 560) },
        { phone: "WRIST WATCH", img: this.wme6, price: Math.round(2099 / 560) },
        { phone: "WRIST WATCH", img: this.wme7, price: Math.round(21000 / 560) },
      ]
    },
    {
      type: "WOMEN",
      model: [
        { phone: "WRIST WATCH", img: this.wwme, price: Math.round(23000 / 560) },
        { phone: "WRIST WATCH", img: this.wwme1, price: Math.round(23200 / 560) },
        { phone: "WRIST WATCH", img: this.wwme2, price: Math.round(56990 / 560) },
        { phone: "WRIST WATCH", img: this.wwme3, price: Math.round(30000 / 560) },
        { phone: "WRIST WATCH", img: this.wwme4, price: Math.round(11000 / 560) },
        { phone: "WRIST WATCH", img: this.wwme5, price: Math.round(32000 / 560) },
        { phone: "WRIST WATCH", img: this.wwme6, price: Math.round(19000 / 560) },
        { phone: "WRIST WATCH", img: this.wwme7, price: Math.round(30000 / 560) },
      ]
    },
    {
      type: "FASHION",
      model: [
        { phone: "WRIST WATCH", img: this.wfn, price: Math.round(47000 / 560) },
        { phone: "WRIST WATCH", img: this.wfn1, price: Math.round(69200 / 560) },
        { phone: "WRIST WATCH", img: this.wfn2, price: Math.round(56990 / 560) },
        { phone: "WRIST WATCH", img: this.wfn3, price: Math.round(6400 / 560) },
        { phone: "WRIST WATCH", img: this.wfn4, price: Math.round(11000 / 560) },
        { phone: "WRIST WATCH", img: this.wfn5, price: Math.round(13200 / 560) },
        { phone: "WRIST WATCH", img: this.wfn6, price: Math.round(5499 / 560) },
        { phone: "WRIST WATCH", img: this.wfn7, price: Math.round(86000 / 560) },
      ]

    },
    {
      type: "TECH",
      model: [
        { phone: "WRIST WATCH", img: this.wth, price: Math.round(47000 / 560) },
        { phone: "WRIST WATCH", img: this.wth1, price: Math.round(69200 / 560) },
        { phone: "WRIST WATCH", img: this.wth2, price: Math.round(56990 / 560) },
        { phone: "WRIST WATCH", img: this.wth3, price: Math.round(70000 / 560) },
        { phone: "WRIST WATCH", img: this.wth4, price: Math.round(60000 / 560) },
        { phone: "WRIST WATCH", img: this.wth5, price: Math.round(13200 / 560) },
        { phone: "WRIST WATCH", img: this.wth6, price: Math.round(5499 / 560) },
        { phone: "WRIST WATCH", img: this.wth7, price: Math.round(86000 / 560) },
      ]
    },
    {
      type: "TRACKER",
      model: [
        { phone: "WRIST WATCH", img: this.wtk, price: Math.round(47000 / 560) },
        { phone: "WRIST WATCH", img: this.wtk1, price: Math.round(34200 / 560) },
        { phone: "WRIST WATCH", img: this.wtk2, price: Math.round(30990 / 560) },
        { phone: "WRIST WATCH", img: this.wtk3, price: Math.round(23000 / 560) },
        { phone: "WRIST WATCH", img: this.wtk4, price: Math.round(11000 / 560) },
        { phone: "WRIST WATCH", img: this.wtk5, price: Math.round(40000 / 560) },
        { phone: "WRIST WATCH", img: this.wtk6, price: Math.round(30000 / 560) },
        { phone: "WRIST WATCH", img: this.wtk7, price: Math.round(40000 / 560) },
      ]
    }
    ],
  ]
  mStore = [];
  constructor(private nativeStorage: NativeStorage) {
    setInterval(() => {
      this.nativeStorage.getItem('store')
        .then(
          data => {
            this.mStore = JSON.parse(data);
            this.cart = this.mStore[0].user[this.id].cart;
            this.client = this.mStore[0].client;
            this.amount = this.mStore[0].user[this.id].amount;
            this.myCart = this.mStore[0].user[this.id].myCart;
            this.transaction = this.mStore[0].user[this.id].transaction;
          },
          error => {
            console.error(error);
            this.cart = [];
            this.client = [{ phone: "WRIST WATCH", img: this.wfn1, price: Math.round(69200 / 560) }]
            this.amount=0;
            this.myCart = [];
            this.transaction = [];
            this.mStore.push({cart:[], user:[]});
            this.nativeStorage.setItem("store", JSON.stringify(this.mStore))
          }
        );
    }, 1000)
  }
}
