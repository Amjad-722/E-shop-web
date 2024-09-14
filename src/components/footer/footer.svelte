<script>
    import {
      faFacebook,
      faTwitter,
      faYoutube,
      faInstagram,
    } from "@fortawesome/free-brands-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  
    export let address = "ABD ,233 ......";
    export let phone = "91........";
    export let email = "example@gmail.com";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing luctus nec ullamcorper mattis, pulvinar dapibus leo.";
    
    export let socialLinks = [
      { icon: faFacebook, url: "https://www.facebook.com" },
      { icon: faTwitter, url: "https://www.twitter.com" },
      { icon: faYoutube, url: "https://www.youtube.com" },
      { icon: faInstagram, url: "https://www.instagram.com" }
    ];
  
    export let poweredBy = "Plant Shop";
  </script>
  
  <div class="h-lv py-20 px-10">
    <div class="flex flex-row justify-around">
      <div>
        <h1 class="font-bold text-xl">Address</h1>
        <p>{address}</p>
      </div>
      
      <div class="flex flex-col gap-4 justify-center items-center">
        <h1 class="font-extrabold text-5xl">Get In Touch</h1>
        <p>{description}</p>
        
        <div class="flex justify-center lg:justify-start space-x-4 mt-8">
          {#each socialLinks as link}
            <a href={link.url} target="_blank" class="text-green-700 hover:bg-gray-400 rounded-full">
              <FontAwesomeIcon icon={link.icon} class="fa-2x" />
            </a>
          {/each}
        </div>
        
        <h3 class="font-bold text-xl">Call Us</h3>
        <p>{phone}</p>
      </div>
      
      <div>
        <h1 class="font-bold text-xl">Email</h1>
        <p>{email}</p>
      </div>
    </div>
  </div>
  
  <div class="h-[100px] flex justify-around items-center bg-black text-white">
    <p class="text-white">© 2023. All rights reserved.</p>
    <p>Powered by {poweredBy}</p>
  </div>
  