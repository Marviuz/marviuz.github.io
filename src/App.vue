<template>
  <v-app>
    <v-main>
      <v-banner>
        <v-container>
          <v-row justify="center" align="center">
            <img src="@/assets/full-body.jpg" />
            <v-col>
              <h1 class="text-center text-h1">
                Hi, I'm
                <span class="primary--text">Marcus Leviticus Dela Cruz</span>!
              </h1>
              <p
                class="text-center text-overline"
                style="font-size: 1.25rem !important"
              >
                Pretty long? Just call me
                <span class="primary--text">Marcus</span>!
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-banner>

      <!-- ABOUT ME -->
      <section class="sheet-divider">
        <v-container class="py-5 my-5">
          <v-row justify="space-around">
            <v-col cols="12" md="4" lg="3">
              <h2 class="text-h2 text-center primary--text">About me</h2>
              <p class="mt-5 text-body-1">
                I'm an aspiring developer focusing on web usually using some of
                the most known JS frameworks and libraries. I enjoy exploring
                new things and seeing what can these JS frameworks and libraries
                can do. I sometimes do personal projects out of curiosity and if
                it works, I deploy them live to free hosting sites.
              </p>
            </v-col>
            <v-col class="flex-grow-0 pa-5">
              <v-container fill-height>
                <v-row align="center">
                  <v-avatar size="15rem">
                    <img src="@/assets/profile-img.jpg" />
                  </v-avatar>
                </v-row>
              </v-container>
            </v-col>
            <v-col cols="12" md="4" lg="3">
              <v-timeline dense>
                <v-timeline-item right small fill-dot>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>
                        Marcus Leviticus M. Dela Cruz
                      </v-list-item-title>
                      <v-list-item-subtitle>Name</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-timeline-item>

                <v-timeline-item right small fill-dot>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ autoAge("05/12/1998") }} yrs. old
                      </v-list-item-title>
                      <v-list-item-subtitle>Age</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-timeline-item>

                <v-timeline-item right small fill-dot>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>
                        Cabanatuan, Nueva Ecija, Philippines
                      </v-list-item-title>
                      <v-list-item-subtitle>Address</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-divider></v-divider>

      <!-- EXPERIENCE -->
      <section class="sheet-divider">
        <h2 class="text-h2 text-center primary--text">Experience</h2>
        <v-container>
          <v-timeline align-top>
            <v-timeline-item right small fill-dot>
              <div slot="opposite">
                <div class="text-h5 primary--text">TK Ship</div>
                <div class="text-subtitle-1">Bradford, Connecticut, USA</div>
                <div class="text-subtitle-1">January 2020 - Present</div>
              </div>
              <v-card color="primary">
                <v-card-title class="text-h5 white--text">
                  Amazon Product Lister (Home based)
                </v-card-title>
                <v-card-text class="white pt-5">
                  <ul>
                    <li>Listed items that will potentially sell on Amazon.</li>
                    <li>
                      Reviewed other listings from other listers to ensure
                      quality and maintain high ratings of the Amazon store.
                    </li>
                    <li>
                      Help in inventory, vendor price monitoring and price
                      adjustments from time to time.
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-timeline-item>

            <v-timeline-item right small fill-dot>
              <div slot="opposite">
                <div class="text-h5 primary--text">ITech - PFS Technology</div>
                <div class="text-subtitle-1">
                  Baguio, Cordillera Administrative Region
                </div>
                <div class="text-subtitle-1">2018</div>
              </div>
              <v-card color="primary">
                <v-card-title class="text-h5 white--text">
                  Amazon Product Lister (Home based)
                </v-card-title>
                <v-card-text class="white pt-5">
                  <ul>
                    <li>
                      Designed and coded static websites with the use of
                      Wordpress for companies listed from a spreadsheet.
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </section>

      <v-divider></v-divider>

      <!-- EDUCATION -->
      <section class="sheet-divider">
        <v-container>
          <h2 class="text-h2 text-center primary--text">Education</h2>
          <v-timeline>
            <v-timeline-item hide-dot>
              <div slot="opposite">
                <div class="text-h5 primary--text">Saint Louis University</div>
                <div class="text-subtitle-1">
                  August 2016 - June 2019, Baguio
                </div>
              </div>
              <div class="text-h5 primary--text">
                Bachelor of Science in Information Technology
              </div>
              <p class="text-body-1">
                Here, I learned the fundamentals of programming. Education is
                mainly Java but this is where I started to take interest in Web
                development and the importance of user experience.
              </p>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </section>

      <v-divider></v-divider>

      <!-- SKILLS -->
      <section class="sheet-divider">
        <v-container>
          <h2 class="text-h2 text-center primary--text">Skills</h2>
          <v-data-iterator
            class="mt-3"
            :items="skills"
            hide-default-footer
            :items-per-page.sync="skills.length"
          >
            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="item in props.items"
                  :key="item.name"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ item.name }}
                      </v-list-item-title>
                      <v-rating readonly :value="item.rating"></v-rating>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </section>

      <v-divider></v-divider>

      <!-- PERSONAL PROJECTS -->
      <section class="sheet-divider">
        <v-container>
          <h2 class="text-h2 text-center primary--text">Personal Projects</h2>
          <p class="mt-3 text-center">
            Projects that I did on my own due to personal interest and
            curiosity.
          </p>

          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="project in personalProjects"
              :key="project.name"
            >
              <v-card>
                <v-card-title>
                  <h3 class="text-h3">{{ project.name }}</h3>
                </v-card-title>
                <v-card-text>
                  <p class="text-body-1">{{ project.desc }}</p>
                  <p v-if="project.website">
                    <span>This is live at </span>
                    <a :href="project.website" target="_blank">
                      {{ project.website }}
                    </a>
                  </p>
                </v-card-text>
                <v-card-actions>
                  <v-btn text :href="project.repo" target="_blank">
                    <v-icon left>mdi-github</v-icon>
                    <span>Source code here!</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-divider></v-divider>

      <!-- HOBBIES -->
      <section class="sheet-divider">
        <v-container>
          <h2 class="text-h2 text-center primary--text">Hobbies</h2>
          <p class="mt-3 text-center">Things I do when I'm not busy.</p>

          <v-timeline>
            <v-timeline-item right small fill-dot>
              <div slot="opposite">
                <div class="text-h5 primary--text">Gaming</div>
                <div class="text-subtitle-1">Of course this!</div>
              </div>
              <div>
                <p class="text-body-1">
                  I play a few games and stream them live on twitch for fun. I
                  stream live at
                  <a href="http://twitch.tv/marviuz" target="_blank">
                    twitch.tv/marviuz
                  </a>
                  Saturdays and Sundays. I usually start at 7 to 8 AM GMT+8. I
                  also have a
                  <a
                    href="https://www.youtube.com/channel/UCS3nZnjH6-eyeWFn6aKLjdg"
                    target="_blank"
                    >YouTube channel</a
                  >
                  and I upload fun things that happen after stream.
                </p>
              </div>
            </v-timeline-item>

            <v-timeline-item right small fill-dot>
              <div slot="opposite">
                <div class="text-h5 primary--text">Music</div>
                <div class="text-subtitle-1">I play guitar!</div>
              </div>
              <div>
                <p class="text-body-1">
                  When I heard something I like, I usually do covers of it and
                  upload it to separate YouTube Channel. I have two channels
                  that I upload to. One is for
                  <a
                    href="https://www.youtube.com/channel/UCoN-ox0wf7tCr_IWkwyb0lw"
                    target="_blank"
                  >
                    AniSong covers
                  </a>
                  and one
                  <a
                    href="https://www.youtube.com/channel/UCAUOmt0zbdgWJ-BTAKSqXPA"
                    target="_blank"
                  >
                    for whatever song I like to cover
                  </a>
                </p>
              </div>
            </v-timeline-item>
            <v-timeline-item right small fill-dot>
              <div slot="opposite">
                <div class="text-h5 primary--text">Anime & Manga</div>
                <div class="text-subtitle-1">
                  Well, I did say I cover AniSongs!
                </div>
              </div>
              <div>
                <img src="@/assets/man-of-culture.gif" />
                <p class="text-body-1">Yes, I'm a man of culture as well!</p>
              </div>
            </v-timeline-item>

            <v-timeline-item right small fill-dot>
              <div slot="opposite">
                <div class="text-h5 primary--text">Web development</div>
                <div class="text-subtitle-1">
                  Yup! Sometimes developing something out of curiosity is a
                  stress reliever
                </div>
              </div>
              <div>
                <p class="text-body-1">
                  The true reason why I have those personal projects. And when
                  I'm stressed, it helps me forget some problems and focus on
                  that project instead. I push most of my projects in
                  <a href="https://github.com/marviuz/" target="_blank">
                    my GitHub
                  </a>
                </p>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </section>

      <v-footer padless>
        <v-row no-gutters justify="center">
          <v-col cols="12">
            <v-card flat tile>
              <v-card-text class="pa-5">
                <h2 class="text-h2 text-center primary--text">Contacts</h2>
                <v-data-iterator
                  class="d-flex flex-column align-center"
                  :items="contacts"
                  hide-default-footer
                  :items-per-page.sync="contacts.length"
                >
                  <template v-slot:default="props">
                    <div v-for="item in props.items" :key="item.name">
                      <v-btn
                        text
                        :href="item.link"
                        :target="
                          item.link.includes('mailto') ? '_self' : '_blank'
                        "
                      >
                        <v-icon left>
                          {{ item.icon }}
                        </v-icon>
                        {{ item.text }}
                      </v-btn>
                    </div>
                  </template>
                </v-data-iterator>
              </v-card-text>
            </v-card>
          </v-col>
          <v-row justify="center">
            <social-plugins></social-plugins>
          </v-row>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import skillContents from "@/content/skills";
import projects from "@/content/projects";
import contacts from "@/content/contacts";
import metaInfo from "@/content/meta-data";

import SocialPlugins from "@/components/SocialPlugins.vue";

export default {
  components: { SocialPlugins },
  metaInfo,
  data() {
    return {
      skills: skillContents,
      personalProjects: projects,
      contacts
    };
  },
  methods: {
    /**
     * credits to https://www.javatpoint.com/calculate-age-using-javascript
     *
     * @param {string} dateOfBirth date of birth in `mm/dd/yyyy` format.
     */
    autoAge(dateOfBirth) {
      const dob = new Date(dateOfBirth);
      //calculate month difference from current date in time
      const month_diff = Date.now() - dob.getTime();

      //convert the calculated difference in date format
      const age_dt = new Date(month_diff);

      //extract year from date
      const year = age_dt.getUTCFullYear();

      //now calculate the age of the user
      const age = Math.abs(year - 1970);

      return age;
    }
  }
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}

.sheet-divider {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>