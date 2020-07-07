    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">{{auth()->user()->currentCompany->name}}<sup>0.1</sup></div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="{{ route('home') }}">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Channels
      </div>

      <!-- Nav Item - Pages Collapse Menu -->

 
        @foreach (auth()->user()->currentCompany->channels as $channel)
            
        <li class="nav-item">
            <a class="nav-link " href="{{route('showChannelMessanger',$channel['id'])}}" aria-expanded="true">
            <span>{{ $channel['name'] }}</span>
            </a>
        </li> 
        @endforeach
        <li class="nav-item">
            <a class="nav-link " href="{{ route('addchannel') }}" aria-expanded="true">
            <i class="fas fa-fw fa-plus"></i>
            <span>Add Channel</span>
            </a>
        </li> 

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Users
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
 
        @foreach ($companyUsers as $user)

        <li class="nav-item">
            <a class="nav-link " href="{{route('showUserMessanger',$user['id'])}}" aria-expanded="true">
            <span>{{ $user['name'] }}</span>
            </a>
        </li> 
        @endforeach
        <li class="nav-item">
            <a class="nav-link " href="{{ route('adduser') }}" aria-expanded="true">
            <i class="fas fa-fw fa-plus"></i>
            <span>Add User</span>
            </a>
        </li> 


      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->