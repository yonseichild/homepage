---
title: Projects
nav:
  order: 2
  tooltip: What we study
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

이곳은 연구실에서 현재 진행 중인 연구와 과거의 연구들을 소개하는 공간입니다.

저희 연구실은 영아부터 성인에 이르기까지 다양한 연령층을 대상으로 연구를 진행하고 있습니다. 참여를 원하시는 연령대의 연구를 쉽게 찾아보시려면 하단의 연령별 **태그(Tag)** 를 클릭해 주세요. 또한 각 연구의 포스터 이미지를 클릭하시면 연구 목적과 참여 방법 등 더욱 자세한 내용을 확인하실 수 있습니다.

연구실에서 수행 중인 과제(Projects)가 궁금하시다면 **[여기](https://fis.yonsei.ac.kr/faculty/member.do?mode=view&userId=KO9d8%2F04eIG9m4Eb2dU2LA%3D%3D&sosokcd=0000142)** 를 클릭해 주시기 바랍니다.

{% include tags.html tags="영아(~만1세), 유아(~만6세), 초등학생" %}
{% include search-info.html %}

{% include section.html %}

## 진행 중인 연구 Ongoing study

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

## 지난 연구 Completed study

{% include list.html component="card" data="projects" filter="!group" style="small" %}
