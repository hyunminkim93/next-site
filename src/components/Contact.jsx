import { contactText } from "@/constants";

export default function Contact() {
    return (
        <section id="contact">
            <div class="contact__inner">
                <h2 class="contact__title">Contact</h2>
                <div class="contact__lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <div class="contact__text">
                    {contactText.map((cont, key) => (
                        <div class="text" key={key}>
                            <div>
                                <a href={cont.link} target="_blank">
                                    {cont.title}
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
                <div class="contact__lines bottom" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
        </section>
    )
}