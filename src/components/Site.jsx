import { siteText } from "@/constants";

export default function Site() {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    Site coding <em>나의 작업물</em>
                </h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className="site__item s1" key={key}>
                            <span className="num">{key + 1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title"></h3>
                            <div className="btn">
                                <a href={site.code}>code</a>
                                <a href={site.view}>view</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                                <span>{site.info[3]}</span>
                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    )
}