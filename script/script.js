gsap.registerPlugin(CSSPlugin);


// header

// main
gsap.set(".main .title h1 span, .main .title p", {
    opacity: 0,
    y: 50
});

const mainAnim = gsap.timeline({});

mainAnim
    .to(".main .title h1 span", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.5,
    })
    .to(".main .title p", {
        opacity: 1,
        y: 0,
        duration: 0.7,
    })


// about



// main project
function createProjectAnimation() {
    // 첫 번째 타임라인: firstSite
    const firstSite = gsap.timeline({
        scrollTrigger: {
            trigger: '.project',
            start: '-10% 50%',
            end: '0% 50%',
            scrub: 0,
            // markers: true
        }
    })
    .to('.project__site1', {width: '100%'}, 'a')
    .from('.project', {yPercent: 1}, 'a');

    // 두 번째 타임라인: projectSites
    const projectSites = gsap.timeline({
        scrollTrigger: {
            trigger: '.project',
            scrub: 0,
            start: '0 0',
            end: '100% 100%',
            // markers: true
        }
    });

    // 사이트 배열과 애니메이션 설정
    const sites = ['.project__site2', '.project__site3', '.project__site4', '.project__site5'];
    
    sites.forEach((site, index) => {
        const prevSite = sites[index - 1] || '.project__site1';
        const label = String.fromCharCode(97 + index); // 'a', 'b', 'c', 'd'

        projectSites
            .to(site, { transform: 'translateY(0)' }, `${label}+=0.1`)
            .to(site, { width: '100%' }, label)
            .to(`${prevSite} .site__wrap`, { opacity: '0' }, `${label}+=0.3`);
    });

    // 타임라인 객체들을 반환 (필요한 경우 사용)
    return { firstSite, projectSites };
}

createProjectAnimation();


// footer 

