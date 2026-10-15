---
title: Research
nav:
  order: 1
  tooltip: Publications & Presentations
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

저희 연구실은 인지발달, 언어 발달, 심리추론 능력 이해 발달, 도덕성 발달, 그리고 노인기의 인지 및 정서 발달 등 인간 발달의 다양한 측면을 탐구합니다. 특히 최근에는 아동의 호기심과 질문 능력의 발달에 대해 탐구하고 있습니다.

<div class="research-interests">
  <article class="research-interest">
    <div class="research-interest-media">
      <img src="{{ '/images/research_curiosity_photo.png' | relative_url }}" alt="책을 바라보는 아기" width="1280" height="851" loading="lazy" decoding="async">
    </div>
    <div class="research-interest-copy">
      <h3>호기심 <span lang="en">Curiosity</span></h3>
      <p>아이들은 자신이 모르는 것을 알아차리고, 답을 찾기 위해 질문하면서 세상을 배워 갑니다. 저희 연구실은 이러한 질문 능력과 호기심이 아동기 동안 어떻게 발달하고 학교에서의 학습 경험에 따라 어떻게 달라지는지 연구합니다.</p>
      <p>또한 공교육과 사교육을 포함한 교육 환경이 자발적인 탐구와 창의성에 어떤 영향을 주는지 살펴봅니다. AI가 질문과 답을 쉽게 제시하는 시대에 아이들이 스스로 궁금해하고 질문하는 능력을 어떻게 키워 가는지도 중요한 관심사입니다.</p>
    </div>
  </article>

  <article class="research-interest">
    <div class="research-interest-media">
      <img src="{{ '/images/research_language_photo.png' | relative_url }}" alt="알록달록한 한글 글자 블록" width="642" height="335" loading="lazy" decoding="async">
    </div>
    <div class="research-interest-copy">
      <h3>언어 발달 <span lang="en">Language</span></h3>
      <p>아이들은 주변 사람들과 대화하고 상호작용하며 말의 의미와 쓰임을 배워 갑니다. 저희 연구실은 영아와 아동이 단어와 문장을 어떻게 이해하고 사용하게 되는지, 언어를 배우는 과정에서 타고난 능력과 주변 환경이 각각 어떤 역할을 하는지 탐구합니다.</p>
      <p>아이마다 언어 발달의 속도와 양상이 다른 이유, 다양한 언어 경험과 사회적 상호작용이 언어 이해와 표현에 어떤 변화를 가져오는지도 살펴봅니다.</p>
    </div>
  </article>

  <article class="research-interest">
    <div class="research-interest-media">
      <img src="{{ '/images/research_morality_photo.png' | relative_url }}" alt="장난감을 함께 가지고 노는 두 아이" width="1170" height="780" loading="lazy" decoding="async">
    </div>
    <div class="research-interest-copy">
      <h3>도덕성 발달 <span lang="en">Morality</span></h3>
      <p>다른 사람을 돕고 나누는 행동은 함께 살아가는 데 중요한 능력입니다. 저희 연구실은 영아와 어린 아동이 도움과 나눔을 언제부터, 어떤 상황에서 보이는지 연구합니다.</p>
      <p>또한 타인의 필요를 알아차리고 행동으로 옮기는 과정이 아이의 기질, 양육 환경, 또래와의 경험 등과 어떻게 관련되는지 살펴보며, 친사회적 행동이 발달하는 과정을 이해하고자 합니다.</p>
    </div>
  </article>
</div>

{% include section.html %}

## Publications

{% capture publications %}{% include publications.md %}{% endcapture %}
<div class="apa-publications">
{{ publications | markdownify }}
</div>

<style>
.research-interests {
  margin-top: 2.5rem;
}

.research-interest {
  display: grid;
  grid-template-columns: minmax(0, 18rem) minmax(0, 1fr);
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  padding: 2rem 0;
  border-top: 1px solid var(--light-gray);
}

.research-interest-media {
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 8px;
}

.research-interest-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.research-interest-copy h3 {
  margin: 0 0 0.85rem;
  font-size: 1.4rem;
  line-height: 1.35;
  letter-spacing: 0;
}

.research-interest-copy h3 span {
  margin-left: 0.25em;
  font-size: 0.8em;
  font-weight: 400;
  color: var(--gray);
}

.research-interest-copy p {
  margin: 0 0 0.7rem;
  line-height: 1.8;
  text-align: left;
}

.research-interest-copy p:last-child {
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .research-interest {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.75rem 0;
  }

  .research-interest-media {
    width: 100%;
  }
}
</style>
