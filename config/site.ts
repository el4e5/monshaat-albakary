export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "منشأة البكاري",
  description: "منشأة البكاري هي قرية تقع في الهرم. يهدف هذا التطبيق إلى تعريف أهل القرية والزوار بأحدث الأخبار والخدمات المحلية، بما في ذلك المستشفيات، العيادات، الصنايعية، المدرسين، والمحلات." ,
  navItems: [
    {
      label: "الرئيسية",
      href: "/",
    },
    {
      label: "المستندات",
      href: "/docs",
    },
    {
      label: "الأسعار",
      href: "/pricing",
    },
    {
      label: "المدونة",
      href: "/blog",
    },
    {
      label: "حول",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "الملف الشخصي",
      href: "/profile",
    },
    {
      label: "لوحة التحكم",
      href: "/dashboard",
    },
    {
      label: "المشاريع",
      href: "/projects",
    },
    {
      label: "الفريق",
      href: "/team",
    },
    {
      label: "التقويم",
      href: "/calendar",
    },
    {
      label: "الإعدادات",
      href: "/settings",
    },
    {
      label: "المساعدة والتعليقات",
      href: "/help-feedback",
    },
    {
      label: "تسجيل الخروج",
      href: "/logout",
    },
  ],
  links: {
    x: "https://x.com/heroui",
  },
};
