---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team (2026)

{% include section.html %}

## Principal Investigator

{% include list.html data="members" component="portrait" filter="role == 'Principal Investigator'" %}

## Researchers & Graduate Students

{% include list.html data="members" component="portrait" filter="role == 'Postdoctoral Researcher'" %}
{% include list.html data="members" component="portrait" filter="role == 'PhD Student'" %}
{% include list.html data="members" component="portrait" filter="role == 'Master Student'" %}

## Research Assistants

{% include list.html data="members" component="portrait" filter="role == 'RA'" %}

## Alumni

{% assign alumni_members = site.members | where: "role", "Alumni" | sort: "order" %}
<div class="alumni-grid">
  {% for alumni in alumni_members %}
    {% include alumni-card.html member=alumni %}
  {% endfor %}
</div>

<div class="alumni-more">
  <h3>Additional alumni</h3>
  {% if site.data.alumni.more.size > 0 %}
    <p class="alumni-more-names">{{ site.data.alumni.more | join: ", " }}</p>
  {% endif %}
</div>

{% include section.html background="images/background.jpg" dark=true %}

## Join Us!
연구실에서는 발달심리 연구에 직접 참여하는 경험을 쌓고 싶은, 성실하고 의욕 있는 학부생 연구 조교(Research Assistant)를 매 학기(1, 2학기 / 여름방학, 겨울방학) 모집하고 있습니다. 희망하는 학생들은 아래 링크를 통해 지원해주세요.
{% include button.html link="https://forms.gle/1x1hiVphYFNDJUcS7" text="학부생 RA 신청" icon="fa-solid fa-graduation-cap" %}

{% include section.html %}

## Lab photos

{% capture content %}

{% include figure.html image="images/team1.jpeg" %}
{% include figure.html image="images/team2.jpeg" %}
{% include figure.html image="images/team3.jpeg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
