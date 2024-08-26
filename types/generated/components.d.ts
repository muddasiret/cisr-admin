import type { Schema, Attribute } from '@strapi/strapi';

export interface WeeklyWeeklyTimetable extends Schema.Component {
  collectionName: 'components_weekly_weekly_timetables';
  info: {
    displayName: 'weekly timetable';
    icon: 'calendar-check';
  };
  attributes: {
    day: Attribute.String;
    time: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    speaker: Attribute.String;
    topic: Attribute.String;
    description: Attribute.Text;
  };
}

export interface TeamTeam extends Schema.Component {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'team';
    icon: 'user-alt';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    designation: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SectionsSyllabus extends Schema.Component {
  collectionName: 'components_sections_syllabi';
  info: {
    displayName: 'syllabus';
    icon: 'ad';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_decoration_heroes';
  info: {
    name: 'Hero';
    icon: 'address-card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface AboutAccordionAccordion extends Schema.Component {
  collectionName: 'components_about_accordion_accordions';
  info: {
    displayName: 'accordion';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'weekly.weekly-timetable': WeeklyWeeklyTimetable;
      'team.team': TeamTeam;
      'shared.seo': SharedSeo;
      'sections.syllabus': SectionsSyllabus;
      'sections.hero': SectionsHero;
      'about-accordion.accordion': AboutAccordionAccordion;
    }
  }
}
