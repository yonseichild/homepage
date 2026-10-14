---
title: Research
nav:
  order: 1
  tooltip: Publications & Presentations
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

저희 연구실은 인지발달, 언어 발달, 심리추론 능력 이해 발달, 도덕성 발달, 그리고 노인기의 인지 및 정서 발달 등 인간 발달의 다양한 측면을 탐구합니다. 특히 최근에는 아동의 호기심과 질문 능력의 발달에 대해 탐구하고 있습니다.

{% capture col1 %}
#### 호기심 Curiosity
{% include figure.html image="images/research_curiosity.png" %}
호기심이란 무언가를 알고 싶어할 때 수반되는 복잡한 감정적, 인지적 상태입니다.
{% endcapture %}

{% capture col2 %}
#### 언어 발달 Language
{% include figure.html image="images/research_languages.png" %}
소리를 이해하고, 말로 표현하는 능력을 점차적으로 획득해 가는 과정을 탐구합니다.
{% endcapture %}

{% capture col3 %}
#### 도덕성 발달 Morality
{% include figure.html image="images/research_morality.png" %}
옳고 그름을 판단하고 행동하는 능력이 자라는 과정을 탐구합니다.
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% include section.html %}

## Publications

{% capture publications %}{% include publications.md %}{% endcapture %}
<div class="apa-publications">
{{ publications | markdownify }}
</div>

<style>
.cols > * {
  padding-top: 1rem;
  border-top: 4px solid #E6E2D8;
}
.cols > *:nth-child(1) { border-top-color: #FFCA3A; }
.cols > *:nth-child(2) { border-top-color: #8AC926; }
.cols > *:nth-child(3) { border-top-color: #6A4C93; }

.cols h4 {
  min-height: 0;
  margin-bottom: 0.6rem;
}

.cols .figure img {
  max-width: 180px;
  margin: 0 auto;
  box-shadow: none !important;
  border-radius: 8px;
}
  
</style>
