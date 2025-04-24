'use client';

import dynamic from 'next/dynamic';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const MapLeaflet = dynamic(() => import('@/components/map-leaflet'), {
  ssr: false, // ⛔ SSR disabled, only render in client
});

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          {/* <AppSidebar /> */}
          <SidebarInset>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              <MapLeaflet />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}