import { skillText } from "@/constants";

export default function Skill() {
  return (
    <section id="skill">
    <div class="skill__inner">
      <div class="skill__title">
        <h2>Challenge <em>나의 도전</em></h2>
      </div>
      <div class="skill__desc">
        <div>
          {skillText.map((text , key) => (
            <div>
              <span>{ key + 1 }.</span>
          <h3>{ text.title }</h3>
          <p>{ text.desc}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  </section>
  )
}
