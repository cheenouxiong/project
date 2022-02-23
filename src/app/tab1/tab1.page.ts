import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  category=[]
  highlight:any=[          
        {
          "image":"https://th.bing.com/th/id/OIP.lEa60MoPEz7kNWZQBc_a3wHaEo?w=261&h=180&c=7&r=0&o=5&pid=1.7",        
        },
        {
          "image":"https://th.bing.com/th/id/R.5aa5d35a2897ea9f9ba9c9d985f6e5d1?rik=xjrr8TVAUoO%2bww&pid=ImgRaw&r=0",          
        },
        {
          "image":"https://media1.popsugar-assets.com/files/thumbor/b3lS0kXhqSg5iJrfNV0SGy2IxiE/fit-in/728xorig/filters:strip_icc-!!-/2018/05/15/912/n/1922729/0bf7ba6261e7318f_PS18_04_26_BJ_Pinterest_List_Fitness_KetoFoodList/i/Keto-Food-List.jpg",          
        },
        {
          "image":"https://townsquare.media/site/496/files/2020/03/Bar-Harbor-Food-Pantry-Needs-List.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",          
        },
        {
          "image":"https://truthaboutfluoride.com/wp-content/uploads/2020/04/foods-high-in-fluoride.png",          
        },
        {
          "image":"https://www.wicprogram.net/images/foodlist/hi/hi-04-min.jpg",          
        }          
  ]

  featured=[]

  catSlideOpts ={
    freeMode:true,
    slidesPerView:3.5,
    slidesOffsetBefore:11,
    spaceBetween:5,
    loop:true,
  };
  highlightSlidesOpts ={
    slidesPerView:1.5,
    spaceBetween:10,
    centeredSlides:true,
    loop:true
  }

  data:any=[

    
    {
      "image":"https://th.bing.com/th/id/OIP.lEa60MoPEz7kNWZQBc_a3wHaEo?w=261&h=180&c=7&r=0&o=5&pid=1.7",
      "category":"food",
      "meals":[
        {
          "id":1,
          "name": "name",
          "price":30000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.lEa60MoPEz7kNWZQBc_a3wHaEo?w=261&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id":2,
          "name": "name1",
          "price":25000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/R.d393c79fe5cebfad1489db4e816428aa?rik=XHB%2f5qKZtQJ12A&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fJunk-Food-Images.jpg&ehk=C0PEv1JLmsPLGNfxQiwtZ8pl6YJHjFnbLUwzfcn2usA%3d&risl=1&pid=ImgRaw&r=0"
        },
        {
          "id":3,
          "name": "name2",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":4,
          "name": "name3",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":5,
          "name": "name4",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         }
      ]  
    }, 
    {
      "image":"https://th.bing.com/th/id/OIP.2QNJR2SWSlONiry-LJE6fQHaE8?w=288&h=192&c=7&r=0&o=5&pid=1.7",
      "category":"Vegetable",
      "meals":[
        {
          "id":1,
          "name": "name",
          "price":30000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.lEa60MoPEz7kNWZQBc_a3wHaEo?w=261&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id":2,
          "name": "name1",
          "price":25000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/R.d393c79fe5cebfad1489db4e816428aa?rik=XHB%2f5qKZtQJ12A&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fJunk-Food-Images.jpg&ehk=C0PEv1JLmsPLGNfxQiwtZ8pl6YJHjFnbLUwzfcn2usA%3d&risl=1&pid=ImgRaw&r=0"
        },
        {
          "id":3,
          "name": "name2",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":4,
          "name": "name3",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":5,
          "name": "name4",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         }
      ]  
    },
    {
      "image":"https://th.bing.com/th/id/OIP.KnBNFA4RUCECKivHnxR4QAHaFj?w=234&h=180&c=7&r=0&o=5&pid=1.7",
      "category":"drinks",
      "meals":[
        {
          "id":1,
          "name": "name",
          "price":30000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.lEa60MoPEz7kNWZQBc_a3wHaEo?w=261&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id":2,
          "name": "name1",
          "price":25000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/R.d393c79fe5cebfad1489db4e816428aa?rik=XHB%2f5qKZtQJ12A&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fJunk-Food-Images.jpg&ehk=C0PEv1JLmsPLGNfxQiwtZ8pl6YJHjFnbLUwzfcn2usA%3d&risl=1&pid=ImgRaw&r=0"
        },
        {
          "id":3,
          "name": "name2",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":4,
          "name": "name3",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":5,
          "name": "name4",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         }
      ]  
    }, 
    {
      "image":"https://th.bing.com/th/id/OIP.-HrsT3odBQvaLQkCfi-EgAHaFi?w=235&h=180&c=7&r=0&o=5&pid=1.7",
      "category":"desert",
      "meals":[
        {
          "id":1,
          "name": "name",
          "price":30000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.lEa60MoPEz7kNWZQBc_a3wHaEo?w=261&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id":2,
          "name": "name1",
          "price":25000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/R.d393c79fe5cebfad1489db4e816428aa?rik=XHB%2f5qKZtQJ12A&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fJunk-Food-Images.jpg&ehk=C0PEv1JLmsPLGNfxQiwtZ8pl6YJHjFnbLUwzfcn2usA%3d&risl=1&pid=ImgRaw&r=0"
        },
        {
          "id":3,
          "name": "name2",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":4,
          "name": "name3",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":5,
          "name": "name4",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         }
      ]  
    }, 
    {
      "image":"https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/thanksgiving-meal-kit-1603842344.jpg?crop=1.00xw:0.752xh;0,0.160xh&resize=900:*",
      "category":"meals",
      "meals":[
        {
          "id":1,
          "name": "name",
          "price":30000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.lEa60MoPEz7kNWZQBc_a3wHaEo?w=261&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id":2,
          "name": "name1",
          "price":25000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/R.d393c79fe5cebfad1489db4e816428aa?rik=XHB%2f5qKZtQJ12A&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fJunk-Food-Images.jpg&ehk=C0PEv1JLmsPLGNfxQiwtZ8pl6YJHjFnbLUwzfcn2usA%3d&risl=1&pid=ImgRaw&r=0"
        },
        {
          "id":3,
          "name": "name2",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":4,
          "name": "name3",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         },
         {
          "id":5,
          "name": "name4",
          "price":20000,
          "info":"information about food",
          "image":"https://th.bing.com/th/id/OIP.vIGY_oEuMFTa9fXG17D4MAHaEK?w=316&h=180&c=7&r=0&o=5&pid=1.7"
         }
      ]  
    },         
  ];
   ngOnInit(): void {
       
    for(let i=0;i<this.data.length;i++)
    {
      console.log(this.data[i].meals[i].info);
      console.log("/////////////////////////")
      console.log(this.category=this.data[i].category);
     
    }
    console.log(this.highlight);

      // console.log(this.data);
      // console.log(this.data[0].meals[0].id);
      // console.log(this.data[1].meals[1].name);
   }

}
