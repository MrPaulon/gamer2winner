<template>
  <div class="page-container">
    <!-- Navbar -->
    <header class="header" style="border-radius: 20px;">
      <div class="content">
        <div>
          <img src="/logo_couleur.png" class="w-10" />
        </div>
        <nav class="nav">
          <UButton size="lg" variant="subtle">Accueil</UButton>
          <UButton size="lg" variant="subtle">Tournois</UButton>
          <UButton size="lg" variant="subtle">Communauté</UButton>
        </nav>
        <div class="buttons">
          <UButton
            :icon="colorMode.preference === 'dark' ? 'solar:sun-2-bold-duotone' : 'solar:moon-bold-duotone'"
            size="lg"
            variant="ghost"
            @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
          />
          <UButton  size="lg">Mon compte</UButton>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="background">
        <img src="/tournament.jpg" style="filter: blur(0px);" alt="Tournoi" class="w-full h-full object-cover" />
      </div>
      <div class="flex justify-center" style="width: 100%; margin-top: 50px;">
        <h2 style="margin: 50px; font-family: berlin_sans_fb; width: 1000px;" class="text-6xl font-extrabold mb-6 drop-shadow-lg">Participez et devenez le prochain champion</h2>
      </div>
      <UButton icon="solar:crown-star-bold" size="xl" color="primary" variant="solid" class="mt-4 text-xl px-5 py-3">Commencer l'aventure</UButton>
    </section>

    <!-- Tournoi en Vedette -->
    <section class="featured-tournament">
      <h3 class="text-primary text-lg font-bold uppercase tracking-wider mb-2">Tournoi en Vedette</h3>
      <h2 class="text-5xl font-extrabold mb-6" style="font-family: berlin_sans_fb;">League of Legends – Summer Cup 2025</h2>
      <p class="text-lg mb-10 text-muted-foreground max-w-2xl mx-auto">Rejoignez le plus grand tournoi de l'été avec plus de 500 joueurs et 10 000€ de cash prize. Une compétition épique vous attend !</p>

      <div class="content">
        <img src="/tournaments/cup.jpg" alt="Summer Cup" class="rounded-3xl shadow-xl w-full md:w-1/2 object-cover" />
        <div class="details">
          <ul class="text-lg leading-loose mb-6">
            <li><strong>Date :</strong> 15 juillet 2025</li>
            <li><strong>Lieu :</strong> En ligne</li>
            <li><strong>Cash Prize :</strong> 10 000€</li>
            <li><strong>Inscription :</strong> Gratuite</li>
          </ul>
          <UButton icon="solar:play-circle-bold" size="xl" color="primary" variant="solid" class="text-xl px-6 py-3">S'inscrire maintenant</UButton>
        </div>
      </div>
    </section>

    <!-- Infos Section -->
    <section class="info-section">
      <div class="grid">
        <div>
          <h3 class="text-5xl font-bold mb-6 leading-tight">Un seul endroit pour tous vos tournois</h3>
          <p class="mb-8 text-lg text-muted-foreground leading-relaxed">Gamer2Winner centralise tous vos tournois de jeux vidéo, que vous soyez joueur amateur ou pro. Rejoignez des compétitions passionnantes et mesurez-vous à d'autres passionnés.</p>
          <div class="flex justify-between text-center text-xl font-semibold">
            <div><span class="text-primary text-3xl block">+200</span> joueurs</div>
            <div><span class="text-primary text-3xl block">+50</span> tournois</div>
            <div><span class="text-primary text-3xl block">24/7</span> support</div>
          </div>
        </div>
        <div class="visual group">
          <div class="content">
            <div class="bg"></div>
            <div class="card">
              <img src="/infos.png" alt="Gaming" class="z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Carousel Tendances -->
    <section class="trending-section">
      <h3 class="text-lg font-bold text-center text-primary uppercase">Découvrez</h3>
      <h2 class="text-5xl font-bold uppercase text-center mb-26 leading-tight" style="font-family: berlin_sans_fb;">Les jeux tendances</h2>
      <div class="overflow">
        <div class="carousel">

          <!--Game Card-->
          <div class="card">
            <div class="bg">
              <img class="img" src="/games/valorant.webp" alt="">
              <div class="overlay"></div>
              <h1>Valorant</h1>
            </div>
          </div>
          <!--Game Card-->
          <div class="card">
            <div class="bg">
              <img class="img" src="/games/lol.jpg" alt="">
              <div class="overlay"></div>
              <h1>League of Legends</h1>
            </div>
          </div>
          <!--Game Card-->
          <div class="card">
            <div class="bg">
              <img class="img" src="/games/r6.webp" alt="">
              <div class="overlay"></div>
              <h1>Rainbow six Siege</h1>
            </div>
          </div>
          <!--Game Card-->
          <div class="card">
            <div class="bg">
              <img class="img" src="/games/rocketleague.webp" alt="">
              <div class="overlay"></div>
              <h1>Rocket League</h1>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Communauté Section -->
    <section class="community-section">
      <h3 class="text-5xl font-bold mb-6">Rejoins la communauté</h3>
      <p class="text-xl mb-8 max-w-2xl mx-auto">Discute, forme ton équipe et participe aux prochains événements. Une communauté active et passionnée t'attend.</p>
      <UButton icon="ic:round-discord" size="xl" color="primary" variant="solid" class="mt-4 text-xl px-5 py-3">Rejoindre le Discord</UButton>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="text-muted-foreground">&copy; 2025 Gamer2Winner. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script setup>
// Style
import "~/assets/css/index.scss"

const colorMode = useColorMode()

console.log(colorMode.preference)
</script>