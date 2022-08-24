export type FoldersCategory =
  | 'all email'
  | 'inbox'
  | 'starred'
  | 'sent mail'
  | 'drafts'
  | 'chats'
  | 'spam'
  | 'trash';

export type MultipleFoldersCategory = ['mail', 'spam', 'trash'];

export type MailStatusCategory = 'read' | 'unread';

export type OthersCategory = 'social' | 'updates' | 'forums' | 'promotions';
