import { Component } from '@angular/core'

@Component({
  selector: 'logo-icon',
  standalone: true,
  template: `<svg
    class="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 150 150"
    width="100%"
    height="100%">
    <rect
      x="10%"
      y="10%"
      rx="10%"
      ry="10%"
      width="20%"
      height="80%"
      fill="#4a3ebf" />
    <rect
      x="40%"
      y="10%"
      rx="10%"
      ry="10%"
      width="20%"
      height="80%"
      fill="#716dc2" />
    <rect
      x="70%"
      y="10%"
      rx="10%"
      ry="10%"
      width="20%"
      height="80%"
      fill="#968cce" />
  </svg>`
})
export class LogoIconComponent {}

@Component({
  selector: 'board-icon',
  standalone: true,
  template: `<svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
      fill="currentColor" />
  </svg>`
})
export class BoardIconComponent {}

@Component({
  selector: 'plus-icon',
  standalone: true,
  template: `<svg
    width="11"
    height="11"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
      fill="currentColor"
      fill-rule="nonzero" />
  </svg>`
})
export class plusIconComponent {}

@Component({
  selector: 'sun-icon',
  standalone: true,
  template: `<svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.817 16.18a.96.96 0 01.953.848l.007.112v1.535a.96.96 0 01-1.913.112l-.006-.112V17.14c0-.53.43-.96.96-.96zm-4.5-1.863c.347.346.373.89.08 1.266l-.08.09-1.085 1.087a.96.96 0 01-1.437-1.267l.08-.09 1.086-1.086a.959.959 0 011.357 0zm10.356 0l1.086 1.086a.959.959 0 11-1.357 1.357l-1.085-1.086a.959.959 0 111.356-1.357zM9.817 4.9a4.924 4.924 0 014.918 4.918 4.924 4.924 0 01-4.918 4.918A4.924 4.924 0 014.9 9.818 4.924 4.924 0 019.817 4.9zm8.858 3.958a.96.96 0 110 1.919H17.14a.96.96 0 110-1.92h1.535zm-16.18 0a.96.96 0 01.112 1.912l-.112.007H.96a.96.96 0 01-.112-1.913l.112-.006h1.534zm14.264-5.983a.96.96 0 010 1.357l-1.086 1.086a.96.96 0 11-1.356-1.357l1.085-1.086a.96.96 0 011.357 0zm-12.617-.08l.09.08 1.086 1.086A.96.96 0 014.05 5.398l-.09-.08-1.086-1.086a.959.959 0 011.267-1.436zM9.817 0c.53 0 .96.43.96.96v1.535a.96.96 0 01-1.92 0V.96c0-.53.43-.96.96-.96z"
      fill="currentColor"
      fill-rule="nonzero" />
  </svg>`
})
export class SunIconComponent {}

@Component({
  selector: 'moon-icon',
  standalone: true,
  template: `<svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.474.682c.434-.11.718.406.481.78A6.067 6.067 0 0 0 6.01 4.72c0 3.418 2.827 6.187 6.314 6.187.89.002 1.77-.182 2.584-.54.408-.18.894.165.724.57-1.16 2.775-3.944 4.73-7.194 4.73-4.292 0-7.771-3.41-7.771-7.615 0-3.541 2.466-6.518 5.807-7.37Zm8.433.07c.442-.294.969.232.674.674l-.525.787a1.943 1.943 0 0 0 0 2.157l.525.788c.295.441-.232.968-.674.673l-.787-.525a1.943 1.943 0 0 0-2.157 0l-.786.525c-.442.295-.97-.232-.675-.673l.525-.788a1.943 1.943 0 0 0 0-2.157l-.525-.787c-.295-.442.232-.968.674-.673l.787.525a1.943 1.943 0 0 0 2.157 0Z"
      fill="currentColor" />
  </svg>`
})
export class MoonIconComponent {}

@Component({
  selector: 'ellipsis-icon',
  standalone: true,
  template: `<svg
    width="5"
    height="20"
    xmlns="http://www.w3.org/2000/svg">
    <g
      fill="currentColor"
      fill-rule="evenodd">
      <circle
        cx="2.308"
        cy="2.308"
        r="2.308" />
      <circle
        cx="2.308"
        cy="10"
        r="2.308" />
      <circle
        cx="2.308"
        cy="17.692"
        r="2.308" />
    </g>
  </svg>`
})
export class EllipsisIconComponent {}

@Component({
  selector: 'hide-icon',
  standalone: true,
  template: `<svg
    width="18"
    height="16"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
      fill="currentColor" />
  </svg>`
})
export class HideIconComponent {}

@Component({
  selector: 'show-icon',
  standalone: true,
  template: `<svg
    width="16"
    height="11"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89A3.776 3.776 0 0 1 4.222 5.11 3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z"
      fill="currentColor" />
  </svg>`
})
export class ShowIconComponent {}

@Component({
  selector: 'delete-icon',
  standalone: true,
  template: `<svg
    width="13"
    height="16"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
      fill="currentColor"
      fill-rule="nonzero" />
  </svg>`
})
export class DeleteIconComponent {}

@Component({
  selector: 'check-icon',
  standalone: true,
  template: `<svg
    width="10"
    height="8"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.5 4.5l2.124 2.124L8.97 1.28"
      stroke="#FFF"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd" />
  </svg>`
})
export class CheckIconComponent {}

@Component({
  selector: 'calendar-icon',
  standalone: true,
  template: `<svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
      fill="currentColor"
      fill-rule="nonzero"
      opacity=".5" />
  </svg>`
})
export class CalendarIconComponent {}

@Component({
  selector: 'left-arrow-icon',
  standalone: true,
  template: `<svg
    width="7"
    height="10"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.342.886L2.114 5.114l4.228 4.228"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd" />
  </svg>`
})
export class ArrowLeftIconComponent {}

@Component({
  selector: 'right-arrow-icon',
  standalone: true,
  template: `<svg
    width="7"
    height="10"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 1l4 4-4 4"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd" />
  </svg>`
})
export class ArrowRightIconComponent {}

@Component({
  selector: 'down-arrow-icon',
  standalone: true,
  template: `<svg
    width="11"
    height="7"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 1l4.228 4.228L9.456 1"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd" />
  </svg>`
})
export class ArrowDownIconComponent {}

@Component({
  selector: 'close-icon',
  standalone: true,
  template: `<svg
    width="15"
    height="15"
    xmlns="http://www.w3.org/2000/svg">
    <g
      fill="currentColor"
      fill-rule="evenodd">
      <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
      <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
    </g>
  </svg>`
})
export class CloseIconComponent {}

@Component({
  selector: 'edit-icon',
  standalone: true,
  template: `<svg
    width="15"
    height="15"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.25.875l2.875 2.875-8.875 8.875L2.375 10l8.875-8.875ZM.625 14.375l3.375-.875-2.5-2.5-.875 3.375Z"
      fill="currentColor"
      fill-rule="evenodd" />
  </svg>`
})
export class EditIconComponent {}

@Component({
  selector: 'drag-icon',
  standalone: true,
  template: `<svg
    width="15"
    height="15"
    xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <circle
        cx="4"
        cy="2"
        r="1.5" />
      <circle
        cx="4"
        cy="7"
        r="1.5" />
      <circle
        cx="4"
        cy="12"
        r="1.5" />
      <circle
        cx="10"
        cy="2"
        r="1.5" />
      <circle
        cx="10"
        cy="7"
        r="1.5" />
      <circle
        cx="10"
        cy="12"
        r="1.5" />
    </g>
  </svg>`
})
export class DragIconComponent {}
