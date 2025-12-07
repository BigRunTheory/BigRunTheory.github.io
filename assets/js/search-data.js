// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "Thank you for taking the time to check out my profile! For more details, please click the PDF button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "selected publications, notes and useful links",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "implementation codes of proposed algorithms in my publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-buddha-39-s-teaching",
          title: "Buddha&#39;s teaching",
          description: "to be continued...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-cv",
              title: "cv",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/cv/";
              },
            },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-buddha-39-s-teaching",
              title: "Buddha&#39;s teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "post-my-photography-journey-year-of-2025",
        
          title: "My Photography Journey (Year of 2025)",
        
        description: "hope you enjoy my vision~",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/vision-01/";
          
        },
      },{id: "post-my-photography-journey-year-of-2024",
        
          title: "My Photography Journey (Year of 2024)",
        
        description: "hope you enjoy my vision~",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vision-01/";
          
        },
      },{id: "post-刀子嘴-豆腐心",
        
          title: "刀子嘴·豆腐心",
        
        description: "Lettering Design",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/design-01/";
          
        },
      },{id: "post-仲月芬",
        
          title: "仲月芬",
        
        description: "吳語寫的小文一篇，亦是為我奶奶畫的小像一幅",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/text-01/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%42%69%67%52%75%6E%54%68%65%6F%72%79@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=GEqMbqEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
