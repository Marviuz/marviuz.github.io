<template>
  <v-app>
    <v-main>
      <v-container>
        <v-banner>
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
        </v-banner>

        <!-- ABOUT ME -->
        <v-container>
          <v-row justify="space-around">
            <v-col cols="3" hover>
              <h2 class="text-h2 mb-2 text-center primary--text">About me</h2>
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
            <v-col cols="3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>
                    Marcus Leviticus M. Dela Cruz
                  </v-list-item-title>
                  <v-list-item-subtitle>Name</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ autoAge("05/12/1998") }} yrs. old
                  </v-list-item-title>
                  <v-list-item-subtitle>Age</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>
                    Cabanatuan, Nueva Ecija, Philippines
                  </v-list-item-title>
                  <v-list-item-subtitle>Address</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <!-- EXPERIENCE -->
        <v-container>
          <h2 class="text-h2 mb-2 text-center primary--text">Experience</h2>
          <v-row class="mt-3">
            <v-col cols="6" class="text-right">
              <div class="text-h5 primary--text">TK Ship</div>
              <div class="text-subtitle-1">Bradford, Connecticut, USA</div>
              <div class="text-subtitle-1">January 2020 - Present</div>
            </v-col>
            <v-col cols="6">
              <div class="text-h5 primary--text">
                Amazon Product Lister (Home based)
              </div>
              <ul>
                <li>Listed items that will potentially sell on Amazon.</li>
                <li>
                  Reviewed other listings from other listers to ensure quality
                  and maintain high ratings of the Amazon store.
                </li>
                <li>
                  Help in inventory, vendor price monitoring and price
                  adjustments from time to time.
                </li>
              </ul>
            </v-col>
            <v-col cols="6" class="text-right">
              <div class="text-h5 primary--text">ITech - PFS Technology</div>
              <div class="text-subtitle-1">
                Baguio, Cordillera Administrative Region
              </div>
              <div class="text-subtitle-1">2018</div>
            </v-col>
            <v-col cols="6">
              <div class="text-h5 primary--text">Intern</div>
              <ul>
                <li>
                  Designed and coded static websites with the use of Wordpress
                  for companies listed in a spreadsheet.
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <!-- EDUCATION -->
        <v-container>
          <h2 class="text-h2 mb-2 text-center primary--text">Education</h2>
          <v-row cols="6" class="mt-3">
            <v-col class="text-right">
              <div class="text-h5 primary--text">Saint Louis University</div>
              <div class="text-subtitle-1">August 2016 - June 2019, Baguio</div>
            </v-col>
            <v-col cols="6">
              <div class="text-h5 primary--text">
                Bachelor of Science in Information Technology
              </div>
              <p class="text-body-1">
                Here, I learned the fundamentals of programming. Education is
                mainly Java but this is where I started to take interest in Web
                development and the importance of user experience.
              </p>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <!-- SKILLS -->
        <v-container>
          <h2 class="text-h2 mb-2 text-center primary--text">Skills</h2>
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

        <v-divider></v-divider>

        <!-- PERSONAL PROJECTS -->
        <v-container>
          <h2 class="text-h2 mb-2 text-center primary--text">
            Personal Projects
          </h2>
          <p class="mt-3 text-center">
            Projects that I did on my own due to personal interest and
            curiosity.
          </p>

          <v-card
            class="ma-5"
            v-for="project in personalProjects"
            :key="project.name"
          >
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
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import skillContents from "@/content/skills";
import projects from "@/content/projects";

export default {
  data() {
    return {
      skills: skillContents,
      personalProjects: projects
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