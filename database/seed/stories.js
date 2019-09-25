exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("stories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stories").insert([
        {
          id: 1,
          author: "medium",
          title: "Alia from Syria!",
          approved: 0,
          body:
            "Alia fled her home in Aleppo, Syria and is currently living in Damour, Lebanon. She shared her story through Gruppo Aleimar, an Italian NGO which provides free, nutritious meals to refugees in the Damour area. Alia is 7 years old. The last thing I remember of Syria, before we left, was when my mother was taking me from our place to our grandparents. The roads were full of dead corpses. I saw dead people with no heads or no hands or legs. I was so shocked I couldn’t stop crying. To calm me down, my grandfather told me they were mean people, but I still prayed for them, because even if some considered them mean, they were still dead human beings. Back at home, I left a friend in Syria, her name was Rou’a. I miss her a lot and I miss going to school with her. I used to play with her with my Atari, but I couldn’t bring it with me. I also used to have pigeons, one of them had eggs, I would feed them and care for them. I’m worried about them, I really pray someone is still caring for them. But here I have a small kitten that I really love! I miss my home a lot. I hope one day we’ll be back and things will be just like before.",
          country: "Syria",
          url_img:
            "https://miro.medium.com/max/1200/1*D42Gz7wFMbqaEwavBv4MQQ.jpeg"
        },
        {
          id: 2,
          author: "medium",
          title: "Bizimana from Kenya!",
          approved: 0,
          body:
            "He fled his home in Rwanda and is now living in Nairobi, Kenya. Bizimana’s story was shared with us by Refugees International Japan, which focuses on the health, education and economic livelihoods of people displaced by conflict around the world. Bizimana was two years old when his family had to flee the Rwandan genocide to Burundi. From there he moved to camps in Tanzania and now lives in Nairobi, Kenya. He received business start-up training and has established a business that has grown so fast he is now able to start a cafe service. He is also a prize-winning singer.",
          country: "Kenya",
          url_img:
            "https://miro.medium.com/max/1200/1*nGIBzIjz8n3zD1GIBjSeXw.jpeg"
        },
        {
          id: 3,
          author: "medium",
          title: "Yara from Syria!",
          approved: 0,
          body:
            "Yara fled her home in Syria and is currently living in Tripoli, Lebanon. Yara’s story was shared with us by Concern Worldwide, which works with displaced persons inside Syria and with refugees and vulnerable host families in Lebanon and Turkey to meet basic needs, improve access to health care, and provide psychosocial support. Yara has loved sewing since she was a child. “My mother taught me when I was a young girl and said it would always be a useful skill,” she said. “I never imagined that one day it would come to mean so much, and provide me with a small income.” Originally from Syria, Yara studied embroidery at a self-help group in Tripoli, Lebanon, run by Concern Worldwide’s local partners. She attended workshops for two hours a day, and was able to leave her younger children at a partner-run kindergarten. “Embroidery is a new skill for me,” she said. “There is so much to learn and every day we do something different. The main thing is that it occupies my mind and it stops me from thinking too much. Using my hands and creating something beautiful calms me. The lady who teaches the embroidery class is like a mother figure for us.” Yara has been living in Lebanon with her five children and husband for the past two years. “We were a close-knit family, but we had to flee Syria,” she explained. Her parents and one of her sisters were a refugee camp in Jordan, and two sisters still in Syria. “I worry about them every day.”",
          country: "Syria",
          url_img:
            "https://miro.medium.com/max/1200/1*o0OTMovcX4PHcEGXtMV20g.jpeg"
        },
        {
          id: 4,
          author: "medium",
          title: "Sabri from Syria!",
          approved: 1,
          body:
            "He fled his home in Aleppo, Syria and is currently living in Paiania, Greece. Sabri shared his story with us through Emfasis, a Greek organization responding to the needs of Syrian refugees in Greece and implementing a photography project to help Syrian children address psychological problems. Sabri is 16 years old. “I am currently staying at a guesthouse for minors and families in Paiania, just outside Athens, Greece with my family. I’d like to go to Germany. We already know my family and I were granted permission to relocate to a German city. We are hoping to start a new page in our lives. I wish I could make people love each other — that is my dream.”",
          country: "Syria",
          url_img:
            "https://miro.medium.com/max/1200/1*MLWVHfSc6-1YhBpkV_inVA.jpeg"
        },
        {
          id: 5,
          author: "medium",
          title: "Achan from Sudan!",
          approved: 1,
          body:
            "She fled her home in Pajok, South Sudan and is currently living in a refugee camp in Lamwo District, Uganda. Achan’s story was shared with us by Hope Ofiriha, a Norwegian NGO which assists South Sudanese refugees with medical care, microfinance, and education. She is 75 years old. Achan is a widow who had eight children. Seven of her children died during the ongoing war in her home country of South Sudan. As a result, she was left with many orphans to take care of. Before the war, she was a peasant farmer in Sudan who cultivated to sustain her big family. When the war broke out in her community, she and her family ran to save their lives, leaving all their belongings behind. She believes her home has been destroyed by the rebels.",
          country: "Syria",
          url_img:
            "https://miro.medium.com/max/1200/1*MLWVHfSc6-1YhBpkV_inVA.jpeg"
        }
      ]);
    });
};
