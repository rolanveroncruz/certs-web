import {Component, inject, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-video-player',
  imports: [CommonModule],
  templateUrl: './video-player.html',
  styleUrl: './video-player.scss'
})
export class VideoPlayer implements OnInit{
  @Input({ required: true }) headline!: string;
  @Input({ required: true }) bodyText!: string;
  @Input({ required: true }) youtubeUrl!: string;

  safeVideoUrl: SafeResourceUrl | null=null;

  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    if (this.youtubeUrl) {
      const videoId = this.extractVideoId(this.youtubeUrl);
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      }
    }
  }
  // Helper to extract ID from various YouTube URL formats
  private extractVideoId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }
}
