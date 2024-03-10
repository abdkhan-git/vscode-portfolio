import Skills from './Skills';

const skillItems = [
    {name: "Java",          rank: 5.23,      icon: "/logos/java.svg",                styleName: "icon-java"},
    {name: "Javascript",    rank: 5.1,      icon: "/logos/javascript.svg",           styleName: "icon-javascript"},
    {name: "C",             rank: 5.25,     icon: "/logos/c.svg",                   styleName: "icon-c"},
    {name: "C++",           rank: 5.3,      icon: "/logos/c++.svg",                  styleName: "icon-c++"},
    {name: "HTML5",         rank: 4,        icon: "/logos/html.svg",               styleName: "icon-html5"},
    {name: "CSS3",          rank: 4,        icon: "/logos/css.svg",                styleName: "icon-css3"},
    {name: "Node.js",       rank: 3.1,      icon: "/logos/nodejs.svg",             styleName: "icon-node"},
    {name: "Python",        rank: 5.1,      icon: "/logos/python.svg",              styleName: "icon-python"},
    {name: "React",         rank: 4.5,      icon: "/logos/react.svg",               styleName: "icon-react"},
    {name: "Angular",       rank: 0,        icon: "/logos/angular.svg",             styleName: "icon-angular"},
    {name: "Bootstrap",     rank: 0,        icon: "/logos/bootstrap.svg",           styleName: "icon-bootstrap"},
    {name: "AWS",           rank: 3.9,      icon: "/logos/aws.svg",                 styleName: "icon-aws"},
    {name: "Linux",         rank: 2,        icon: "/logos/linux.svg",               styleName: "icon-linux"},
    {name: "MySQL",         rank: 4,        icon: "/logos/mysql.svg",               styleName: "icon-mysql"},
    {name: "Git",           rank: 4,        icon: "/logos/git.svg",              styleName: "icon-github"},
    {name: "Next.js",       rank: 3,        icon: "/logos/nextjs.svg",             styleName: "icon-nextjs"},
    {name: "Visual Studio", rank: 3,        icon: "/logos/vscode.svg",               styleName: "icon-visual-studio"},
];


const AllSkills = () => {

    function sortSkills(a, b){
        if(a.rank > b.rank) return -1;
        if(a.rank < b.rank) return 1;

        // Do Other Compares later
        return 0;
    }

    return (
        <>
            {skillItems.sort(sortSkills).map((item) => (
                <Skills options={item} />
            ))}
        </>
    );
};

export default AllSkills;