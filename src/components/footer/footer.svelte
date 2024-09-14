<script>
  import {
    faFacebook,
    faTwitter,
    faYoutube,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
</script>

<div class="h-lv py-20   px-10">
  <div class="flex flex-row justify-around">
    <div>
      <h1 class="font-bold text-xl">Address</h1>

      <p>ABD ,233 ......</p>
    </div>
    <div class="flex flex-col gap-4 justify-center items-center">
      <h1 class="font-extrabold text-5xl">Get In Touch</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing luctus nec
        ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div class="flex justify-center lg:justify-start space-x-4 mt-8">
        <a
          href="https://www.facebook.com"
          target="_blank"
          class="text-green-700 hover:bg-gray-400 rounded-full"
        >
          <FontAwesomeIcon icon={faFacebook} class="fa-2x" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          class="text-green-700 hover:bg-gray-400 rounded-full"
        >
          <FontAwesomeIcon icon={faTwitter} class="fa-2x" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          class="text-green-700 hover:bg-gray-400 rounded-full"
        >
          <FontAwesomeIcon icon={faYoutube} class="fa-2x" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          class="text-green-700 hover:bg-gray-400 rounded-full"
        >
          <FontAwesomeIcon icon={faInstagram} class="fa-2x" />
        </a>
      </div>
      <h3 class="font-bold text-xl">Call Us</h3>
      <p>91........</p>
    </div>
    <div>
      <h1 class="font-bold text-xl" >Email</h1>

      <p></p>
      examlple.@gmail
    </div>
  </div>
</div>
<div class="h-[100px] flex justify-around items-center bg-black text-white">
  <p
    class= "text-white
    "
  >
    © 2023. All rights reserved.
  </p>
  <p>Powered by Plant Shop</p>
</div>
