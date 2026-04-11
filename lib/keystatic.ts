import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

export async function getHomepageData() {
  return await reader.singletons.home.read();
}

export async function getAboutData() {
  return await reader.singletons.about.read();
}

export async function getContactData() {
  return await reader.singletons.contact.read();
}

export async function getMembers() {
  const members = await reader.collections.members.all();
  return members;
}

export async function getGallery() {
  const items = await reader.collections.gallery.all();
  return items;
}

export async function getMembersPageData() {
  return await reader.singletons.membersPage.read();
}

export async function getGalleryPageData() {
  return await reader.singletons.galleryPage.read();
}
