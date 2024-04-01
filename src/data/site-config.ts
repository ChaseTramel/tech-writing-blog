export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Chase Tramel',
    subtitle: 'Technical Writer',
    description: 'Portfolio site for Chase Tramel, a technical writer based in Central Florida.',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/ChaseTramel'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/chasetramel/'
        }
    ],
    hero: {
    title: 'Hello there!',
        text: "I'm **Chase Tramel**, a technical writer based in Central Florida. I  use this site to write about web development, technical writing, and project management. If you're looking for someone to help with your documentation, tutorials, or blog posts, I'd love to hear from you!",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    }
};

export default siteConfig;
