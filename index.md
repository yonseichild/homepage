---
---

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; line-height: normal;">
  <img src="{{ '/images/Lab_logo.png' | relative_url }}" alt="연구실 로고" style="height: 120px; width: auto;">
  <img src="{{ '/images/yonsei_full.png' | relative_url }}" alt="연세대학교 로고" style="height: 100px; width: auto;">
</div>


<h1 class="intro-heading">안녕하세요, 연세대학교 발달심리 연구실입니다! 😊</h1>
<div style="color: #524e47; text-align: center; line-height: 1.65;">
  
아기들은 태어나자마자 자신을 둘러싼 새로운 세상에 대해 수없이 많은 것들을 배워 나가기 시작합니다.<br>
저희 연구실은 아기들이 세상과 언어를 어떻게 이해하고 배우는지를 연구합니다.<br>
연구는 인형극 무대나 비디오 시청, 게임 형식으로 이루어져 아이들이 즐겁게 참여할 수 있으며,<br>
모든 절차는 부모님의 동의 하에 안전히 진행됩니다.<br>
<br>
{% include button.html link="https://docs.google.com/forms/d/e/1FAIpQLScduYahK5CUcUga4La3XH4SX-jf716GfPfj_vMu8CYJ8Vwmow/viewform" text="연구 참여 신청" icon="fa-solid fa-child-reaching" %}
{% include button.html link="https://forms.gle/1x1hiVphYFNDJUcS7" text="학부생 RA 신청" icon="fa-solid fa-graduation-cap" %}

</div>

<div class="latest-news">
  <h2>News</h2>

  <div class="latest-news-grid">
    {% assign latest_posts = site.posts | sort: "date" | reverse | slice: 0, 3 %}
    {% for post in latest_posts %}
      {% assign excerpt = post.excerpt | default: post.content | strip_html | normalize_whitespace | truncate: 95 %}
      <article class="latest-news-card">
        {% if post.image %}
          <a class="latest-news-image" href="{{ post.url | relative_url }}" aria-label="{{ post.title | xml_escape }}">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title | xml_escape }}" loading="lazy">
          </a>
        {% endif %}
        <div class="latest-news-content">
          <time class="latest-news-date" datetime="{{ post.date | date_to_xmlschema }}">
            {{ post.date | date: "%Y.%m.%d" }}
          </time>
          <h3 class="latest-news-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="latest-news-excerpt">{{ excerpt }}</p>
        </div>
      </article>
    {% endfor %}
  </div>

  <div class="latest-news-more">
    <a href="{{ '/blog/' | relative_url }}">
      More {% include icon.html icon="fa-solid fa-arrow-right" %}
    </a>
  </div>
</div>

{% include section.html %}

## Highlights

{% capture text %}

우리 연구실은 인지발달, 언어 발달, 심리추론 능력 이해 발달, 도덕성 발달, 그리고 노인기의 인지 및 정서 발달 등 인간 발달의 다양한 측면을 탐구합니다. 최근에는 아동의 호기심과 질문 능력의 발달에 대해 탐구하고 있습니다.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/curiosity.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

우리 연구실에서는 여러 연구가 동시에 진행되고 있으며, 각 연구에 참여할 아동과 부모님을 모집하고 있습니다. 지금 아이의 연령에 맞는 연구가 없더라도 신청해 주세요. 연령에 맞는 연구가 개설되면 연락드리겠습니다.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/ourproject.jpeg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

우리 연구실은 지도교수를 비롯한 여러 연구원들이 함께 아이들의 마음을 들여다보고 있습니다. 발달심리에 관심 있는 분이라면 언제든 함께할 수 있습니다.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/team.jpg"
  link="team"
  title="Our Team"
  text=text
%}

<style>
header img {
  height: clamp(180px, 10vw, 360px) !important;
  width: auto !important;
}
header .title {
  font-size: clamp(1.6rem, 2.56vw, 2.1875rem) !important;
  font-family: 'SchoolSafetyRoundedSmile', sans-serif !important;
  font-weight: 400;
  -webkit-text-stroke: 0.9px currentColor;
  opacity: 0.91;
}
header .subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem) !important;
}
.intro-heading {
  font-family: 'OmuDaye', 'Pretendard Variable', sans-serif !important;
  font-size: clamp(1.5rem, 2.05vw, 1.75rem) !important;
  font-weight: 400 !important;
  line-height: 1.2 !important;
  margin-bottom: 24px !important;
}
h2#highlights {
  font-size: clamp(1.8rem, 3.15vw, 2.2rem);
}
h2#highlights ~ .feature .feature-title {
  font-size: clamp(1.35rem, 2.416vw, 1.5625rem);
}
h2#highlights ~ .feature .button {
  font-size: clamp(1.1rem, 1.932vw, 1.25rem);
}
header {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;
  min-height: 0 !important;
}
</style>
