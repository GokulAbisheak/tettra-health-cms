import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCard extends Struct.ComponentSchema {
  collectionName: 'components_common_cards';
  info: {
    displayName: 'card';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonProgress extends Struct.ComponentSchema {
  collectionName: 'components_common_progresses';
  info: {
    displayName: 'progress';
    icon: 'chartCircle';
  };
  attributes: {
    percentage: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_cards';
  info: {
    displayName: 'contact card';
    icon: 'information';
  };
  attributes: {
    address: Schema.Attribute.Text;
    available_time: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    map_url: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.card': CommonCard;
      'common.progress': CommonProgress;
      'contact.contact-card': ContactContactCard;
    }
  }
}
